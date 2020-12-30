import path from 'path'

module.exports =  {
  base: './',
  // base: "/vue3-admin-demo/",
  assetsDir: "",
  outDir: 'dist',
  alias: {
    '/@/': path.resolve(__dirname, './src')
  },
  optimizeDeps: {
    include: ['lodash']
  },
  // optimizeDeps: {
  //   include: ["moment", "echarts"]
  // },
  proxy: {},
  // css: {
	// 	loaderOptions: {
	// 	  sass: {
  //       additionalData: `@import "/@/assets/_variable.scss"`
	// 	  }
	// 	}
  // }
}


