import graphql from "@rollup/plugin-graphql";

export default {
  input: "src/App.tsx",
  output: {
    dir: "output",
    format: "cjs",
  },
  plugins: [graphql()],
};
