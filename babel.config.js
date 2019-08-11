// module.exports = {
//   presets: [
//     '@vue/app',
//     ["es2015", { "modules": false }]
//   ],
//   "plugins": [
//     [
//       "component",
//       {
//         "libraryName": "element-ui",
//         "styleLibraryName": "theme-chalk"
//       }
//     ]
//   ]
// }
module.exports = {
  presets: [
  '@vue/app'
  ],
  "plugins": [
  [
  "component",
  {
  "libraryName": "element-ui",
  "styleLibraryName": "theme-chalk"
  },
  ],
  
  ['import', {
  libraryName: 'vant',
  libraryDirectory: 'es',
  style: true
  }, 'vant']
  ]
  }
