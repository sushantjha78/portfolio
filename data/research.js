// Publications. "summary" shows on the home page, "details" on research.html.

const RESEARCH_INTRO =
  "Both papers were published at ICCET 2023, the International Conference on " +
  "Computing and Emerging Technologies.";

const RESEARCH = [
  {
    title: "Decoding Motion-Blur using Variational Autoencoder",
    venue: "ICCET 2023",
    note: "",
    url: "https://doi.org/10.1049/icp.2023.1496",
    summary:
      "A deep learning method that recovers sharp, high-frame-rate video from a " +
      "single motion-blurred frame.",
    details:
      "Proposed a deep learning method that generates sharp, high-frame-rate video " +
      "from a single motion-blurred frame and one clear reference frame, offering a " +
      "software alternative to expensive high-speed cameras. Validated on the GoPro " +
      "dataset.",
    coauthors: "Co-authored with Sushlok Shah and Dr. Saugata Sinha (VNIT Nagpur).",
  },
  {
    title: "Survey of Temporal Video Enhancement Techniques",
    venue: "ICCET 2023",
    note: "First author",
    url: "https://doi.org/10.1049/icp.2023.1508",
    summary:
      "A survey of how video deblurring and video generation methods evolved from " +
      "classical techniques to transformer-based models.",
    details:
      "First-author survey reviewing how video deblurring and video generation " +
      "methods evolved from classical techniques to transformer-based models, and " +
      "how they can turn low-frame-rate footage into high-quality, high-FPS video.",
    coauthors: "Co-authored with Sushlok Shah and Dr. Saugata Sinha (VNIT Nagpur).",
  },
];
