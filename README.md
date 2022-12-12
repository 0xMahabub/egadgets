# An Items Listing SPA

### A item-listing app using Modern React

[![Netlify Status](https://api.netlify.com/api/v1/badges/d1159be0-a3e5-46e7-a2c5-dff91e797912/deploy-status)](https://app.netlify.com/sites/listing-0xm/deploys)

```yml
features:
  [
    'List :=> sorting',
    'List :=> filtering',
    'List :=> ordering',
    'List :=> search',
    'Data :=> Mock API using @netlify/functions',
    'Styles :=> TailwindCSS, CSS/SCSS',
    'State :=> Zustand State Mangement @global',
    'Fetch :=> @react/query for fetching data',
  ]
```

```yml
usedTech: {
  node: 18.x,
  yarn: 1.22.x,
  npm: 8.x,
  @bundler: vite@4.x,
  @sm: zustand,
  @styles: ['tailwindCss', 'CSS/SCSS'],
  @fetch: ['@xhr/fetch', '@react-query'],
  @data: {
    type: '@api/mock/json-api',
    provider: '@netlify/functions',
  }
}
```
