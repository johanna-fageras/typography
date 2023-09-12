var fonts = [
  {
    name: "Thin",
    files: [
      "https://jfts.se/cdn/le-cygne-noir/fonts/LeCygneNoir-Thin.woff2",
      "https://jfts.se/cdn/le-cygne-noir/fonts/LeCygneNoir-Thin.woff",
    ],
  },
  {
    name: "Thin Italic",
    files: [
      "https://jfts.se/cdn/le-cygne-noir/fonts/LeCygneNoir-ThinItalic.woff2",
      "https://jfts.se/cdn/le-cygne-noir/fonts/LeCygneNoir-ThinItalic.woff",
    ],
  },
  {
    name: "Light",
    files: [
      "https://jfts.se/cdn/le-cygne-noir/fonts/LeCygneNoir-Light.woff2",
      "https://jfts.se/cdn/le-cygne-noir/fonts/LeCygneNoir-Light.woff",
    ],
  },
  {
    name: "Light Italic",
    files: [
      "https://jfts.se/cdn/le-cygne-noir/fonts/LeCygneNoir-LightItalic.woff2",
      "https://jfts.se/cdn/le-cygne-noir/fonts/LeCygneNoir-LightItalic.woff",
    ],
  },
  {
    name: "Regular",
    files: [
      "https://jfts.se/cdn/le-cygne-noir/fonts/LeCygneNoir-Regular.woff2",
      "https://jfts.se/cdn/le-cygne-noir/fonts/LeCygneNoir-Regular.woff",
    ],
  },
  {
    name: "Regular Italic",
    files: [
      "https://jfts.se/cdn/le-cygne-noir/fonts/LeCygneNoir-Italic.woff2",
      "https://jfts.se/cdn/le-cygne-noir/fonts/LeCygneNoir-Italic.woff",
    ],
  },
  {
    name: "Bold",
    files: [
      "https://jfts.se/cdn/le-cygne-noir/fonts/LeCygneNoir-Bold.woff2",
      "https://jfts.se/cdn/le-cygne-noir/fonts/LeCygneNoir-Bold.woff",
    ],
  },
  {
    name: "Bold Italic",
    files: [
      "https://jfts.se/cdn/le-cygne-noir/fonts/LeCygneNoir-BoldItalic.woff2",
      "https://jfts.se/cdn/le-cygne-noir/fonts/LeCygneNoir-BoldItalic.woff",
    ],
  },
  {
    name: "Black",
    files: [
      "https://jfts.se/cdn/le-cygne-noir/fonts/LeCygneNoir-Black.woff2",
      "https://jfts.se/cdn/le-cygne-noir/fonts/LeCygneNoir-Black.woff",
    ],
  },
  {
    name: "Black Italic",
    files: [
      "https://jfts.se/cdn/le-cygne-noir/fonts/LeCygneNoir-BlackItalic.woff2",
      "https://jfts.se/cdn/le-cygne-noir/fonts/LeCygneNoir-BlackItalic.woff",
    ],
  },
];

var options = {
  lazyload: true,
  order: [["fontfamily", "fontsize", "letterspacing"], ["tester"]],
  initialText: "I refuse to join any club that would have me as a member.",
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
