module.exports = function(api) {
  api.cache(true);

  const presets = [
    [
      '@babel/env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
        targets: {
          node: 'current',
        },
      },
    ],
  ];
  const plugins = [
    '@babel/plugin-proposal-optional-chaining',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          Constants: './src/constants',
          Utils: './src/utils',
        },
      },
    ],
  ];

  return {
    presets,
    plugins,
  };
};
