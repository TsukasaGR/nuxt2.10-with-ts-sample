module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    // 上書きしない https://typescript.nuxtjs.org/guide/lint.html#configuration
    parser: '@typescript-eslint/parser',
  },
  extends: [
    // nuxt × typescriptの基本的な設定
    '@nuxtjs/eslint-config-typescript',
    // prettierrの設定をeslintに入れる設定
    'plugin:prettier/recommended',
  ],
  // なくても動いてそう
  // plugins: ['vue'],
  rules: {
    // functionの(前にスペースを含めない
    'space-before-function-paren': ['error', 'never'],
    // HTMLでは閉じタグなしでOKとする
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
        },
      },
    ],
    // セミコロンを禁止する
    semi: [2, 'never'],
    // シングルクォートにする
    quotes: [2, 'single'],
    // htmlタグ終了前は閉じタグ前のみスペースを入れる
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always',
      },
    ],
    // 本番のみconsoleメソッドを禁止する
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 本番のみdebuggerメソッドを禁止する
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 行ごとの最大文字数をオフにする(prettierに任せる)
    'vue/max-attributes-per-line': 'off',
    // prettierの設定を読み込む
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        semi: false,
        singleQuote: true,
        jsxBracketSameLine: true,
        htmlWhitespaceSensitivity: 'ignore',
      },
    ],
  },
}
