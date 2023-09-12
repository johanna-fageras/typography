var fonts = [
  {
    name: "Regular",
    files: [
      "https://jfts.se/cdn/julia-works/fonts/JuliaWorks-Regular.woff2",
      "https://jfts.se/cdn/julia-works/fonts/JuliaWorks-Regular.woff",
    ],
  },
  {
    name: "Bold",
    files: [
      "https://jfts.se/cdn/julia-works/fonts/JuliaWorks-Bold.woff2",
      "https://jfts.se/cdn/julia-works/fonts/JuliaWorks-Bold.woff",
    ],
  },
  {
    name: "Black",
    files: [
      "https://jfts.se/cdn/julia-works/fonts/JuliaWorks-Black.woff2",
      "https://jfts.se/cdn/julia-works/fonts/JuliaWorks-Black.woff",
    ],
  },
];

var options = {
  lazyload: true,
  order: [["fontfamily", "fontsize", "letterspacing"], ["tester"]],
  initialText:
    "I have a lot of growing up to do. I realized that the other day inside my fort.",
  ui: {
    fontsize: {
      init: 4,
      step: 0.1,
      max: 12.5,
      min: 0.5,
      unit: "rem",
      label: "Size",
    },
    letterspacing: {
      unit: "em",
      init: 0,
      min: -1,
      max: 1,
      step: 0.01,
      label: "Letterspacing",
    },
    fontfamily: {
      label: "Style",
      init: "Regular",
    },
  },
};

var fs = new Fontsampler(document.getElementById("tester"), fonts, options);
FontsamplerSkin(fs);
fs.init();
