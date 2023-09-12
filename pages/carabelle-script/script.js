var fonts = [
  {
    name: "Thin",
    files: [
      "https://jfts.se/cdn/carabelle-script/fonts/CarabelleScript-Thin.woff2",
      "https://jfts.se/cdn/carabelle-script/fonts/CarabelleScript-Thin.woff",
    ],
  },
  {
    name: "ExtraLight",
    files: [
      "https://jfts.se/cdn/carabelle-script/fonts/CarabelleScript-ExtraLight.woff2",
      "https://jfts.se/cdn/carabelle-script/fonts/CarabelleScript-ExtraLight.woff",
    ],
  },
  {
    name: "Light",
    files: [
      "https://jfts.se/cdn/carabelle-script/fonts/CarabelleScript-Light.woff2",
      "https://jfts.se/cdn/carabelle-script/fonts/CarabelleScript-Light.woff",
    ],
  },
  {
    name: "Regular",
    files: [
      "https://jfts.se/cdn/carabelle-script/fonts/CarabelleScript-Regular.woff2",
      "https://jfts.se/cdn/carabelle-script/fonts/CarabelleScript-Regular.woff",
    ],
  },
  {
    name: "Medium",
    files: [
      "https://jfts.se/cdn/carabelle-script/fonts/CarabelleScript-Medium.woff2",
      "https://jfts.se/cdn/carabelle-script/fonts/CarabelleScript-Medium.woff",
    ],
  },
  {
    name: "SemiBold",
    files: [
      "https://jfts.se/cdn/carabelle-script/fonts/CarabelleScript-SemiBold.woff2",
      "https://jfts.se/cdn/carabelle-script/fonts/CarabelleScript-SemiBold.woff",
    ],
  },
  {
    name: "Bold",
    files: [
      "https://jfts.se/cdn/carabelle-script/fonts/CarabelleScript-Bold.woff2",
      "https://jfts.se/cdn/carabelle-script/fonts/CarabelleScript-Bold.woff",
    ],
  },
  {
    name: "ExtraBold",
    files: [
      "https://jfts.se/cdn/carabelle-script/fonts/CarabelleScript-ExtraBold.woff2",
      "https://jfts.se/cdn/carabelle-script/fonts/CarabelleScript-ExtraBold.woff",
    ],
  },
  {
    name: "Black",
    files: [
      "https://jfts.se/cdn/carabelle-script/fonts/CarabelleScript-Black.woff2",
      "https://jfts.se/cdn/carabelle-script/fonts/CarabelleScript-Black.woff",
    ],
  },
];

var options = {
  lazyload: true,
  order: [["fontfamily", "fontsize", "letterspacing"], ["tester"]],
  initialText:
    "Never put off till tomorrow what you can do the day after tomorrow just as well.",
  ui: {
    fontsize: {
      init: 3,
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
