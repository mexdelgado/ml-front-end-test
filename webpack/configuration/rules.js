// Dependencies
import ExtractTextPlugin from 'extract-text-webpack-plugin';

// Environment
const isDevelopment = process.env.NODE_ENV !== 'production';

// Package.json
import pkg from '../../package.json';

export default type => {
  const rules = [
    {
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        query: {
          presets: [
            [
              'env', {
                modules: false,
                node: pkg.engines.node,
                browsers: pkg.browserslist
              }
            ]
          ]
        }
      },
      exclude: /node_modules/
    },
    {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      use: {
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      }
    },
    {
      test: /\.gif$/,
      use: {
        loader: 'url-loader?limit=10000&mimetype=image/gif'
      }
    },
    {
      test: /\.jpg$/,
      use: {
        loader: 'url-loader?limit=10000&mimetype=image/jpg'
      }
    },
    {
      test: /\.png$/,
      use: {
        loader: 'url-loader?limit=10000&mimetype=image/png'
      }
    },
    {
      test: /\.woff$/,
      use: {
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      }
    },
    {
      test: /\.woff2$/,
      use: {
        loader: 'url-loader?limit=10000&mimetype=application/font-woff2'
      }
    },
    {
      test: /\.ttf$/,
      use: {
        loader: 'url-loader?mimetype=application/vnd.ms-fontobject'
      }
    },
    {
      test: /\.eot$/,
      use: {
        loader: 'url-loader?mimetype=application/x-font-ttf'
      }
    }
  ];

  if (!isDevelopment || type === 'server') {
    rules.push({
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader?minimize=true&modules=true&localIdentName=[name]__[local]',
          'sass-loader'
        ]
      })
    },{
      test: /(\.css)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          //'css-loader?minimize=true&modules=true&localIdentName=[name]__[local]',
          'css-loader?minimize=true&modules=true',
          'style-loader'
        ]
      })
    });
  } else {
    rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        //'css-loader?minimize=true&modules=true&localIdentName=[name]__[local]',
        'css-loader?minimize=true&modules=true',
        'sass-loader'
      ]
    },{
      test: /(\.css)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          //'css-loader?minimize=true&modules=true&localIdentName=[name]__[local]',
          'css-loader?minimize=true&modules=true',
          'style-loader'
        ]
      })
    });
  }

  return rules;
};
