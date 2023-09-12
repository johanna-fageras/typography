var fonts = [
  {
    name: "Thin",
    files: [
      "https://jfts.se/cdn/asta-typewriter/fonts/AstaTypewriter-Thin.woff2",
      "https://jfts.se/cdn/asta-typewriter/fonts/AstaTypewriter-Thin.woff",
    ],
  },
  {
    name: "Thin Italic",
    files: [
      "https://jfts.se/cdn/asta-typewriter/fonts/AstaTypewriter-ThinItalic.woff2",
      "https://jfts.se/cdn/asta-typewriter/fonts/AstaTypewriter-ThinItalic.woff",
    ],
  },
  {
    name: "Light",
    files: [
      "https://jfts.se/cdn/asta-typewriter/fonts/AstaTypewriter-Light.woff2",
      "https://jfts.se/cdn/asta-typewriter/fonts/AstaTypewriter-Light.woff",
    ],
  },
  {
    name: "Light Italic",
    files: [
      "https://jfts.se/cdn/asta-typewriter/fonts/AstaTypewriter-LightItalic.woff2",
      "https://jfts.se/cdn/asta-typewriter/fonts/AstaTypewriter-LightItalic.woff",
    ],
  },
  {
    name: "Regular",
    files: [
      "https://jfts.se/cdn/asta-typewriter/fonts/AstaTypewriter-Regular.woff2",
      "https://jfts.se/cdn/asta-typewriter/fonts/AstaTypewriter-Regular.woff",
    ],
  },
  {
    name: "Regular Italic",
    files: [
      "https://jfts.se/cdn/asta-typewriter/fonts/AstaTypewriter-Italic.woff2",
      "https://jfts.se/cdn/asta-typewriter/fonts/AstaTypewriter-Italic.woff",
    ],
  },
  {
    name: "Medium",
    files: [
      "https://jfts.se/cdn/asta-typewriter/fonts/AstaTypewriter-Medium.woff2",
      "https://jfts.se/cdn/asta-typewriter/fonts/AstaTypewriter-Medium.woff",
    ],
  },
  {
    name: "Medium Italic",
    files: [
      "https://jfts.se/cdn/asta-typewriter/fonts/AstaTypewriter-MediumItalic.woff2",
      "https://jfts.se/cdn/asta-typewriter/fonts/AstaTypewriter-MediumItalic.woff",
    ],
  },
  {
    name: "Bold",
    files: [
      "https://jfts.se/cdn/asta-typewriter/fonts/AstaTypewriter-Bold.woff2",
      "https://jfts.se/cdn/asta-typewriter/fonts/AstaTypewriter-Bold.woff",
    ],
  },
  {
    name: "Bold Italic",
    files: [
      "https://jfts.se/cdn/asta-typewriter/fonts/AstaTypewriter-BoldItalic.woff2",
      "https://jfts.se/cdn/asta-typewriter/fonts/AstaTypewriter-BoldItalic.woff",
    ],
  },
];

var options = {
  lazyload: true,
  order: [["fontfamily", "fontsize", "letterspacing"], ["tester"]],
  initialText:
    "I never feel more alone than when I’m trying to put sunscreen on my back.",
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
