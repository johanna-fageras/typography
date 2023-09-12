var fonts = [
  {
    name: "Thin",
    files: [
      "https://jfts.se/cdn/space-cowboy-sans/fonts/SpaceCowboySans-Thin.woff2",
      "https://jfts.se/cdn/space-cowboy-sans/fonts/SpaceCowboySans-Thin.woff",
    ],
  },
  {
    name: "Light",
    files: [
      "https://jfts.se/cdn/space-cowboy-sans/fonts/SpaceCowboySans-Light.woff2",
      "https://jfts.se/cdn/space-cowboy-sans/fonts/SpaceCowboySans-Light.woff",
    ],
  },
  {
    name: "Regular",
    files: [
      "https://jfts.se/cdn/space-cowboy-sans/fonts/SpaceCowboySans-Regular.woff2",
      "https://jfts.se/cdn/space-cowboy-sans/fonts/SpaceCowboySans-Regular.woff",
    ],
  },
  {
    name: "Medium",
    files: [
      "https://jfts.se/cdn/space-cowboy-sans/fonts/SpaceCowboySans-Medium.woff2",
      "https://jfts.se/cdn/space-cowboy-sans/fonts/SpaceCowboySans-Medium.woff",
    ],
  },
  {
    name: "SemiBold",
    files: [
      "https://jfts.se/cdn/space-cowboy-sans/fonts/SpaceCowboySans-SemiBold.woff2",
      "https://jfts.se/cdn/space-cowboy-sans/fonts/SpaceCowboySans-SemiBold.woff",
    ],
  },
  {
    name: "Bold",
    files: [
      "https://jfts.se/cdn/space-cowboy-sans/fonts/SpaceCowboySans-Bold.woff2",
      "https://jfts.se/cdn/space-cowboy-sans/fonts/SpaceCowboySans-Bold.woff",
    ],
  },
  {
    name: "Black",
    files: [
      "https://jfts.se/cdn/space-cowboy-sans/fonts/SpaceCowboySans-Black.woff2",
      "https://jfts.se/cdn/space-cowboy-sans/fonts/SpaceCowboySans-Black.woff",
    ],
  },
];

var options = {
  lazyload: true,
  order: [["fontfamily", "fontsize", "letterspacing"], ["tester"]],
  initialText:
    "Clothes make the man. Naked people have little or no influence in society.",
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
