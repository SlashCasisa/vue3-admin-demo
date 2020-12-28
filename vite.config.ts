import path from 'path'

module.exports =  {
  base: "/vue3-admin-demo/",
  assetsDir: "",
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
        additionalData: `@import "/@/assets/_variable.scss"`
		  }
		}
	}
}


