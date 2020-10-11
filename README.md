# vue_community

## 所需图标

交流
案例
框架
登录
qq
微博

## 编辑器配置

- 设置自动保存，单引号变成了双引号，而 eslint 规则建议使用单引号

新建 .prettierrc 配置文件，设置自动保存的规则

```
{
  "singleQuote": true,  // 单引号
  "trailingComma": "es5"  // 是否需要结尾的逗号
}
```

## vue 项目中 eslint 报警告

settings.json 配置中

```
"editor.formatOnSave": true,  => 改为false（项目中的 eslint 配置会被本地配置所覆盖）
```
