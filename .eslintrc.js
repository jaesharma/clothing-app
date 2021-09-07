module.exports = {
  root: true,
  extends: "react-native-wcandillon",
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
