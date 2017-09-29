module.exports = {
  "extends": "airbnb-base",
  "rules": {
    "indent": ["warn", 2],
    "no-tabs": ["off"],
    "strict": ["error", "safe"],
    "no-console": ["error",{
      "allow": ["log", "info", "warn", "error"]
    }],
    "padded-blocks": ["off"],
    "no-underscore-dangle": ["off"],
    // "no-underscore-dangle":  ["warn", {
    //   "allowAfterThis": true
    // }],
    "comma-dangle": ["off", "always"],
    "no-multi-assign": ["off"],
    "keyword-spacing": ["off"],
    "prefer-template": ["off"],
    "global-require": ["off"],
    "import/no-dynamic-require": ["off"],
    "curly": ["off"],
    "no-plusplus": ["off"],
    "space-before-blocks": ["off"],
    "max-len": ["off"],
    "key-spacing": ["off"],
    "spaced-comment": ["off"],
    "no-use-before-define": ["off"],
    "no-param-reassign": ["off"],
    "func-names": ["warn","never"],
    "brace-style": ["off"],
    // prefer
    // "prefer-destructuring": ["warn", {
    //   "array": true,
    //   "object": true
    // }],
    "vue/valid-v-if": "error",
    "linebreak-style": ["off"],
    "quotes": ["off"],
    "import/extensions": ["off"],
    "no-restricted-properties": ["warn"],
    "eqeqeq": ["warn"],
    "no-unused-vars": ["warn"],
    "import/newline-after-import": ["off"],
    "import/first": ["off"],
    "import/no-extraneous-dependencies": ["off"],
    "space-before-function-paren": ["off"],
    "arrow-parens": ["off"],
    "object-curly-spacing": ["warn"],
    "no-multi-spaces": ["off"],
    "prefer-destructuring": ["off"],
    "no-debugger": ["off"],
    "no-lonely-if": ["off"],
    "no-restricted-syntax": ["off"],
    "no-shadow": ["off"],
    "arrow-body-style": ["off"],  // 要求箭头函数体使用大括号
    "no-else-return": ["off"],    // 禁止 if 语句中 return 语句之后有 else 块
    "radix": ["off"],             // 强制在parseInt()使用基数参数
  }
};
