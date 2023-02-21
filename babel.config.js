module.exports = function(api) {
  const isCommonjs = (api.env(["cjs"]))
  api.cache(true);

  const presets= [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: "3.6.5",
        modules: isCommonjs ? "cjs" : false,
      },
    ],
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
  ]
  const plugins= ["@babel/plugin-transform-runtime"]
  const overrides= [
    {
      exclude: /\.test\.js$/,
    },
  ]

  return {
    presets,
    plugins,
    overrides,
    ignore:["src/**/test.js", "src/**/*.test.js"]
  }
}
