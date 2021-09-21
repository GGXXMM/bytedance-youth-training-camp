import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
// 解析json
import json from '@rollup/plugin-json'
// 压缩代码
import { terser } from 'rollup-plugin-terser';
export default {
  input: "src/main.js",
  output: [{
    file: "dist/esmbundle.js",
    format: "esm",
    plugins: [terser()]
  },{
    file: "dist/cjsbundle.js",
    format: "cjs",
  }],
  // commonjs 需要放到 transform 插件之前，
  // 但是又个例外， 是需要放到 babel 之后的
  plugins: [json(), resolve(), commonjs()],
  external: ["vue"]
};
