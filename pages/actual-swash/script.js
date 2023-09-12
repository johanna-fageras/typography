var fonts = [
  {
    name: "Thin",
    files: [
      "https://jfts.se/cdn/actual-swash/fonts/ActualSwash-Thin.woff2",
      "https://jfts.se/cdn/actual-swash/fonts/ActualSwash-Thin.woff",
    ],
  },
  {
    name: "Light",
    files: [
      "https://jfts.se/cdn/actual-swash/fonts/ActualSwash-Light.woff2",
      "https://jfts.se/cdn/actual-swash/fonts/ActualSwash-Light.woff",
    ],
  },
  {
    name: "Regular",
    files: [
      "https://jfts.se/cdn/actual-swash/fonts/ActualSwash-Regular.woff2",
      "https://jfts.se/cdn/actual-swash/fonts/ActualSwash-Regular.woff",
    ],
  },
  {
    name: "Medium",
    files: [
      "https://jfts.se/cdn/actual-swash/fonts/ActualSwash-Medium.woff2",
      "https://jfts.se/cdn/actual-swash/fonts/ActualSwash-Medium.woff",
    ],
  },
  {
    name: "SemiBold",
    files: [
      "https://jfts.se/cdn/actual-swash/fonts/ActualSwash-SemiBold.woff2",
      "https://jfts.se/cdn/actual-swash/fonts/ActualSwash-SemiBold.woff",
    ],
  },
  {
    name: "Bold",
    files: [
      "https://jfts.se/cdn/actual-swash/fonts/ActualSwash-Bold.woff2",
      "https://jfts.se/cdn/actual-swash/fonts/ActualSwash-Bold.woff",
    ],
  },
  {
    name: "Black",
    files: [
      "https://jfts.se/cdn/actual-swash/fonts/ActualSwash-Black.woff2",
      "https://jfts.se/cdn/actual-swash/fonts/ActualSwash-Black.woff",
    ],
  },
];

var options = {
  lazyload: true,
  order: [["fontfamily", "fontsize", "letterspacing"], ["tester"]],
  initialText: "Don’t be defeatist dear, it’s terribly middle class.",
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
