module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
  ],
  ignore: ["**/.git/*", "**/coverage/*", ".stryker-tmp/**", "reports/**"],
};
