import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import prettier from 'rollup-plugin-prettier';

export default [
  {
    input: 'src/index.mjs',
    output: {
      file: 'dist/main.js',
      format: 'cjs',
      esModule: false,
      preferConst: true,
      strict: false
    },
    inlineDynamicImports: true,
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        babelrc: false,
        presets: [
          [
            '@babel/env',
            {
              targets: 'maintained node versions'
            }
          ]
        ],
        plugins: [
            "add-module-exports", "@babel/plugin-syntax-dynamic-import"
        ]
      }),
      prettier({"parser": "babel"})
    ]
  },
  {
    input: 'src/index.mjs',
    output: {
      file: 'dist/main.min.js',
      format: 'cjs',
      esModule: false,
      preferConst: true,
      strict: false
    },
    inlineDynamicImports: true,
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        babelrc: false,
        presets: [
          [
            '@babel/env',
            {
              targets: 'maintained node versions'
            }
          ]
        ],
        plugins: [
            "add-module-exports", "@babel/plugin-syntax-dynamic-import"
        ]
      }),
      terser()
    ]
  },
  {
    input: 'src/index.mjs',
    output: {
      file: 'dist/thats.js',
      format: 'iife',
      name: 'thats',
      esModule: false
    },
    inlineDynamicImports: true,
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        babelrc: false,
        presets: [
          [
            '@babel/env',
            {
              targets: 'cover 95%'
            }
          ]
        ],
        plugins: [
            "add-module-exports", "@babel/plugin-syntax-dynamic-import"
        ]
      }),
      prettier({"parser": "babel"})
    ]
  },
  {
    input: 'src/index.mjs',
    output: {
      file: 'dist/thats.min.js',
      format: 'iife',
      name: 'thats',
      esModule: false
    },
    inlineDynamicImports: true,
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        babelrc: false,
        presets: [
          [
            '@babel/env',
            {
              targets: 'cover 95%'
            }
          ]
        ],
        plugins: [
            "add-module-exports", "@babel/plugin-syntax-dynamic-import"
        ]
      }),
      terser()
    ]
  },
  {
    input: 'src/index.mjs',
    output: {
      file: 'dist/thats.amd.js',
      format: 'amd',
      name: 'thats',
      esModule: false
    },
    inlineDynamicImports: true,
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        babelrc: false,
        presets: [
          [
            '@babel/env',
            {
              targets: 'cover 95%'
            }
          ]
        ],
        plugins: [
            "add-module-exports", "@babel/plugin-syntax-dynamic-import"
        ]
      }),
      prettier({"parser": "babel"})
    ]
  },
  {
    input: 'src/index.mjs',
    output: {
      file: 'dist/thats.amd.min.js',
      format: 'amd',
      name: 'thats',
      esModule: false
    },
    inlineDynamicImports: true,
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        babelrc: false,
        presets: [
          [
            '@babel/env',
            {
              targets: 'cover 95%'
            }
          ]
        ],
        plugins: [
            "add-module-exports", "@babel/plugin-syntax-dynamic-import"
        ]
      }),
      terser()
    ]
  },
  {
    input: 'src/index.mjs',
    output: {
      file: 'dist/thats.mjs',
      format: 'esm',
      name: 'thats',
      esModule: false,
      preferConst: true
    },
    inlineDynamicImports: true,
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        babelrc: false,
        presets: [
          [
            '@babel/env',
            {
              targets: {
                  "esmodules": true
              }
            }
          ]
        ],
        plugins: [
            "add-module-exports", "@babel/plugin-syntax-dynamic-import"
        ]
      }),
      prettier({"parser": "babel"})
    ]
  },
  {
    input: 'src/index.mjs',
    output: {
      file: 'dist/thats.min.mjs',
      format: 'esm',
      name: 'thats',
      esModule: false,
      preferConst: true
    },
    inlineDynamicImports: true,
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        babelrc: false,
        presets: [
          [
            '@babel/env',
            {
              targets: {
                  "esmodules": true
              }
            }
          ]
        ],
        plugins: [
            "add-module-exports", "@babel/plugin-syntax-dynamic-import"
        ]
      }),
      terser()
    ]
  }
];
