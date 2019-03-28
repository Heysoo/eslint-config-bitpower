## 介绍
ESLint Config for Bitpower

## 使用
`npm i eslint --sav-dev`

`npm i eslint-config-bitpower --save-dev`

在项目的 `.eslintrc` 文件
```js
{
  "extends": "bitpower"
}
```

### 配合 vscode 使用
1. 安装 vetur, eslint 插件
2. 在用户设置中（ctrl + ,），搜索 `eslint.validate`，添加以下
```js
{ "autoFix": true, "language": "vue" },
```
3. 重启 vscode