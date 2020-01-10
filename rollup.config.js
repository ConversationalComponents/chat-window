import typescript from "rollup-plugin-typescript2";
import jsx from "rollup-plugin-jsx";
import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import pkg from "./package.json";

export default [
    {
        input: "src/index.ts",
        external: Object.keys(pkg.peerDependencies || {}),
        plugins: [
            postcss({
                plugins: []
            }),
            typescript({
                typescript: require("typescript")
            }),
            jsx({factory: "React.createElement"}),
            resolve()
        ],
        output: [
            {file: pkg.main, format: "cjs"},
            {file: pkg.module, format: "esm"},
            {
                file: "example/src/reactComponentLib/index.js",
                format: "es",
                banner: "/* eslint-disable */"
            }
        ]
    }
];
