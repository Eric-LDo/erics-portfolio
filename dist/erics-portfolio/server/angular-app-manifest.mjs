
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23988, hash: 'ee2ac6b10961fd257ecaa2e49c388bd948157f0e0ba32b7c145d11efdaff1873', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17353, hash: '61ccc3c5a28b79dcbf3f172ce55cd092c1d0cfb10da74b8f535253e0427b4ccc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 24224, hash: '269d8b9577426bbe6813b131310fe078e3e486efbe39ab0072507e7f24a9362d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-WS7H3PLQ.css': {size: 7935, hash: '78PU6i1uV7s', text: () => import('./assets-chunks/styles-WS7H3PLQ_css.mjs').then(m => m.default)}
  },
};
