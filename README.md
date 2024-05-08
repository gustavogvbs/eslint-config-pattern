# My ESLint and Prettier config

## Whats included?

- React plugin;
- React Hooks plugin;
- JSX a11y plugin;
- Import Helpers;
- Prettier;

## Setup

### Step 1

Install dependencies

```
npm i -D @gustavogvbs/eslint-config
```

---

### Step 2

Inside the configuration file: `.eslintrc.json`

#### React

```
{
  "extends": ["@gustavogvbs/eslint-config/react"]
}
```

or

#### Node.js

```
{
  "extends": "@gustavogvbs/eslint-config/react"
}
```

---

### Step 3

Inside `.prettierrc.json`

```
{
  "extends": "gustavogvbs/eslint-config/prettier"
}
```

---

### Optional

Adding plugin configuration `eslint-plugin-import-helpers`

Inside `.eslintrc.json`

```
{
  "extends": ["@gustavogvbs/eslint-config/react"],
  "rules": {
    "import-helpers/order-imports": [
      "warn",
      {
        "newlinesBetween": "always",
        "groups": [...], // configure the import method
        "alphabetize": { "order": "asc", "ignoreCase": true }
      }
    ]
  }
}
```
