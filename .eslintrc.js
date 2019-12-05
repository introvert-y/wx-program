module.exports = {
  extends: "airbnb-base",
  globals: {
    wx: true,
    App: true,
    Page: true,
    Component: true,
    getApp: true,
    getCurrentPages: true
  },
  rules: {
    "no-console": "off",
    "no-use-before-define": [
      "error",
      {
        functions: false
      }
    ],
    "prefer-promise-reject-errors": "off",
    "import/extensions": "off",
    // "comma-dangle": ["error", { functions: "never" }],
    "no-param-reassign": [
      "error",
      {
        props: false
      }
    ],
    // "max-len": "off",
    "linebreak-style": "off"
  }
};
