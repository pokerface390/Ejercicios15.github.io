
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://pokerface390.github.io/Ejercicios15.github.io/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Ejercicios15.github.io"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23577, hash: '47d8244b71b1bc20c3e62eabbca6749c8539c27cc549aef40f4dda5decd45de4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17196, hash: '497a948a321e0e04433c422985b9b75e03482e4c7d55853eaa085eb9d726b5e6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 250458, hash: '249638949ccb22098cb853c5f5f9ca745fee668f7061ea116047e75f3c244a84', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-Z5UYKNDX.css': {size: 6934, hash: 'VxIyzD7LHG8', text: () => import('./assets-chunks/styles-Z5UYKNDX_css.mjs').then(m => m.default)}
  },
};
