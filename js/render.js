// Builds the page from the objects in the data folder.
// Each function fills one section if its container exists on the current page,
// so index.html and research.html can share this file.

function fill(id, html) {
  const container = document.getElementById(id);
  if (container) container.innerHTML = html;
}

// Downward arrow, drawn inline so the button needs no image request.
const DOWNLOAD_ICON = `<svg class="btn-icon" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M8 1.5v8.5M4.5 6.5 8 10l3.5-3.5M2.5 13.5h11" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

function resumeButton() {
  if (!SITE.resume) return "";
  return `<a class="btn" href="${SITE.resume.url}" download="${SITE.resume.file}">${DOWNLOAD_ICON}${SITE.resume.label}</a>`;
}

function renderHeader() {
  const links = SITE.nav
    .map((item) => `<a href="${item.href}">${item.label}</a>`)
    .join("");
  // No site name here: the hero carries it, and the nav links lead home.
  fill("site-header", `<nav>${links}</nav>`);
}

function renderHero() {
  fill(
    "hero",
    `<img class="hero-photo" src="${SITE.photo}" alt="${SITE.photoAlt}" width="112" height="112">
     <div class="hero-text">
       <div class="hero-title">
         <h1>${SITE.name}</h1>
         ${resumeButton()}
       </div>
       <p class="tagline">${SITE.tagline}</p>
       <p class="location">${SITE.location}</p>
     </div>`
  );
}

function renderAbout() {
  fill("about-body", SITE.about.map((para) => `<p>${para}</p>`).join(""));
}

function renderExperience() {
  const jobs = EXPERIENCE.map(
    (job) => `
    <article class="entry">
      <div class="entry-head">
        <h3>${job.role}</h3>
        <span class="period">${job.period}</span>
      </div>
      <p class="entry-meta"><span class="org">${job.company}</span> · ${job.location}</p>
      <ul>${job.points.map((point) => `<li>${point}</li>`).join("")}</ul>
    </article>`
  ).join("");
  fill("experience-list", jobs);
}

// Compact list for the home page, with a link to the research page.
function renderResearchSummary() {
  const papers = RESEARCH.map(
    (paper) => `
    <article class="entry">
      <h3>${paper.title}</h3>
      <p class="entry-meta">${paper.venue}${paper.note ? " · " + paper.note : ""} · <a href="${paper.url}">Read the paper</a></p>
      <p>${paper.summary}</p>
    </article>`
  ).join("");
  fill(
    "research-summary",
    papers + `<p><a href="research.html">More about both papers</a></p>`
  );
}

// Full descriptions for research.html.
function renderResearchFull() {
  const papers = RESEARCH.map(
    (paper) => `
    <article class="entry">
      <h3>${paper.title}</h3>
      <p class="entry-meta">${paper.venue}${paper.note ? " · " + paper.note : ""} · <a href="${paper.url}">Read the paper</a></p>
      <p>${paper.details}</p>
      <p class="entry-meta">${paper.coauthors}</p>
    </article>`
  ).join("");
  fill("research-full", `<p>${RESEARCH_INTRO}</p>` + papers);
}

// The Writing section stays hidden until data/writing.js has entries.
function renderWriting() {
  const section = document.getElementById("writing");
  if (!section || WRITING.length === 0) return;
  section.hidden = false;
  const pieces = WRITING.map(
    (piece) => `
    <article class="card">
      <p class="entry-meta card-source">${piece.source}${piece.date ? " · " + piece.date : ""}</p>
      <h3><a href="${piece.url}">${piece.title}</a></h3>
      <p>${piece.summary}</p>
      <p class="card-link"><a href="${piece.url}">Read on ${piece.source}<span aria-hidden="true"> →</span></a></p>
    </article>`
  ).join("");
  fill("writing-list", pieces);
}

function renderVolunteering() {
  const roles = VOLUNTEERING.map(
    (item) => `
    <article class="entry">
      <div class="entry-head">
        <h3>${item.role}</h3>
        <span class="period">${item.period}</span>
      </div>
      <p class="entry-meta">${item.orgUrl ? `<a class="org" href="${item.orgUrl}">${item.org}</a>` : `<span class="org">${item.org}</span>`}</p>
      ${item.points.length ? `<ul>${item.points.map((point) => `<li>${point}</li>`).join("")}</ul>` : ""}
    </article>`
  ).join("");
  fill("volunteering-list", roles);
}

function renderEducation() {
  const entries = EDUCATION.map(
    (item) => `
    <article class="entry">
      <div class="entry-head">
        <h3>${item.school}</h3>
        <span class="period">${item.period}</span>
      </div>
      <p class="entry-meta">${item.degree} · ${item.detail}</p>
      <p class="entry-meta">Activities: ${item.activities}</p>
    </article>`
  ).join("");
  fill("education-list", entries);
}

function renderCertifications() {
  const certs = CERTIFICATIONS.map(
    (cert) => `
    <article class="entry">
      <h3>${cert.name}</h3>
      <p class="entry-meta">${cert.issued} · Credential ID ${cert.credentialId}</p>
    </article>`
  ).join("");
  fill("certifications-list", certs);
}

function renderSkills() {
  const groups = SKILLS.map(
    (group) => `
    <div class="skill-group">
      <h3>${group.group}</h3>
      <p class="chips">${group.items.map((item) => `<span class="chip">${item}</span>`).join("")}</p>
    </div>`
  ).join("");
  fill("skills-list", groups);
}

function renderContact() {
  const links = SITE.contact.map(
    (item) => `<li><span class="contact-label">${item.label}</span><a href="${item.url}">${item.value}</a></li>`
  ).join("");
  fill(
    "contact-list",
    `<ul class="contact">${links}</ul>
     <p class="actions">${resumeButton()}</p>`
  );
}

function renderFooter() {
  fill("site-footer", `<p>© ${new Date().getFullYear()} ${SITE.footerNote}</p>`);
}

// Not every page loads every data file, so check before rendering.
renderHeader();
renderHero();
renderAbout();
if (typeof EXPERIENCE !== "undefined") renderExperience();
if (typeof RESEARCH !== "undefined") {
  renderResearchSummary();
  renderResearchFull();
}
if (typeof WRITING !== "undefined") renderWriting();
if (typeof VOLUNTEERING !== "undefined") renderVolunteering();
if (typeof EDUCATION !== "undefined") renderEducation();
if (typeof CERTIFICATIONS !== "undefined") renderCertifications();
if (typeof SKILLS !== "undefined") renderSkills();
renderContact();
renderFooter();
