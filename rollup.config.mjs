import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import autoprefixer from 'autoprefixer';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import tailwindcss from 'tailwindcss';
import css from 'rollup-plugin-css-only';

// This is required to read package.json file when
// using Native ES modules in Node.js
// https://rollupjs.org/command-line-interface/#importing-package-json
import { createRequire } from 'node:module';
const requireFile = createRequire(import.meta.url);
const packageJson = requireFile('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        // sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        exports: 'named',
        // sourcemap: true,
      },
    ],
    plugins: [
      typescript({
        // Compile TypeScript using `tsconfig.json`
        tsconfig: './tsconfig.json',
        declaration: true, // Ensure `.d.ts` files are generated
        declarationDir: './dist', // Place `.d.ts` files in the `dist` directory
        rootDir: './src', // Specify the root directory for the declaration files
        paths: {
          '@/*': ['./src/*'],
        },
      }),
      peerDepsExternal(),
      // css({ output: 'index.css' }),
      postcss({
        plugins: [tailwindcss, autoprefixer],
        extract: true,
        minimize: true,
        inject: true
      }),
      resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      commonjs(),
      terser(),
      babel({
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react', '@babel/preset-typescript'],
      }),
    ],
    external: ['react', 'react-dom', 'react-code-blocks'],
  },
];
