module.exports = {
  parser: false, // "sugarss",
  plugins: {
    "postcss-preset-env": {},
    "postcss-pxtorem": {
      rootValue: 200,
      unitPrecision: 16,
      propList: [
        "font-size",
        "line-height",
        "height",
        "width",
        "max-width",
        "margin",
        "padding",
        "left",
        "top",
        "bottom",
        "right",
        "margin-top",
        "margin-left",
        "margin-right",
        "margin-bottom",
        "padding-left",
        "padding-top",
        "padding-right",
        "padding-bottom",
        "max-height",
        "border-radius",
        "background-position-y",
        "flex"
      ]
    },
    cssnano: {},
    autoprefixer: {
      browsers: "last 1 version"
    }
  }
};
