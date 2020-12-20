const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const images = require('@rollup/plugin-image');

module.exports = {
  rollup(config, options) {
    config.plugins = [
      images(),
      postcss({
        plugins: [
          autoprefixer(),
          cssnano({
            preset: 'default',
          }),
        ],
        inject: false,
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: !!options.writeMeta,
      }),
      ...config.plugins,
    ];

    const {
      output: { file, ...restOutput },
      ...restConfig
    } = config;

    // Remove file ref and insert dir to support React.lazy();
    return {
      ...restConfig,
      output: {
        ...restOutput,
        dir: require('path').join(__dirname, 'dist'),
      },
    };
  },
};
