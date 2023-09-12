var fonts = [
  {
    name: "Thin",
    files: [
      "https://jfts.se/cdn/monkey-script/fonts/MonkeyScript-Thin.woff2",
      "https://jfts.se/cdn/monkey-script/fonts/MonkeyScript-Thin.woff",
    ],
  },
  {
    name: "Light",
    files: [
      "https://jfts.se/cdn/monkey-script/fonts/MonkeyScript-Light.woff2",
      "https://jfts.se/cdn/monkey-script/fonts/MonkeyScript-Light.woff",
    ],
  },
  {
    name: "Regular",
    files: [
      "https://jfts.se/cdn/monkey-script/fonts/MonkeyScript-Regular.woff2",
      "https://jfts.se/cdn/monkey-script/fonts/MonkeyScript-Regular.woff",
    ],
  },
  {
    name: "Medium",
    files: [
      "https://jfts.se/cdn/monkey-script/fonts/MonkeyScript-Medium.woff2",
      "https://jfts.se/cdn/monkey-script/fonts/MonkeyScript-Medium.woff",
    ],
  },
  {
    name: "Bold",
    files: [
      "https://jfts.se/cdn/monkey-script/fonts/MonkeyScript-Bold.woff2",
      "https://jfts.se/cdn/monkey-script/fonts/MonkeyScript-Bold.woff",
    ],
  },
];

var options = {
  lazyload: true,
  order: [["fontfamily", "fontsize", "letterspacing"], ["tester"]],
  initialText:
    "I walk around like everything’s fine, but deep down, inside my shoe, my sock is sliding off.",
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
