const webpack = require("webpack");

module.exports = {
        resolve: {
          alias: {
            "react/jsx-dev-runtime.js": "react/jsx-dev-runtime",
            "react/jsx-runtime.js": "react/jsx-runtime",
          },
        },
        module: {
          rules: [
            {
              test: /\.m?js$/,
              resolve: {
                fullySpecified: false
              },
            },
            {
              test: /\.m?js/,
              type: "javascript/auto",
            },
            {
              test: /\.m?js/,
              resolve: {
                fullySpecified: false,
              },
            },
          ]
        },
        
};