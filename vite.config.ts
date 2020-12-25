import path from 'path'

module.exports =  {
  alias: {
    '/@/': path.resolve(__dirname, './src')
  },
  optimizeDeps: {
    include: ['lodash']
  },
  proxy: {},
  css: {
		loaderOptions: {
		  sass: {
        additionalData: `@import "/@/assets/scss/_variable.scss"`
		  }
		}
	}
}


