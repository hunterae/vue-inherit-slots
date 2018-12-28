module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'examples/index.html',
      filename: 'index.html',
      title: 'vue-slot-hooks Examples'
    }
  },

  baseUrl: process.env.NODE_ENV === 'production' ? '/vue-slot-hooks/' : '/'
}
