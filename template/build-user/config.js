module.exports = {
  checkAppId: '',
  appVersion: '1.0.0', // 项目版本
  appUrl: '/static/test/', // 项目路径  如   /static/mobile/test/
  list: [
    { title: '1505-stable', url: '//staticadm.tcy365.org:1505', env: 1505 },
    { title: '1507-test', url: '//staticadm.tcy365.org:1507', env: 1507 },
    {
      title: '1506-develop',
      url: '//staticadm.tcy365.org:1506',
      env: 1506
    },
    { title: '2505-pre', url: '//staticadm.tcy365.com:2505', env: 2505 },
    { title: '80-static', url: '//staticadm.tcy365.com', env: 'production' }
  ],
  px2rem: null,
  isFile: false, //是否使用文件夹
  showPage: [], //["weixin", "sdw"]
  devServer: {
    //history server 模式
    // historyApiFallback: {
    //     rewrites: [
    //         {
    //             from: /.*/g,
    //             to: '/dest/game/index.html'
    //         }
    //     ]
    // },
    //host: 'localhost',
    disableHostCheck: true,
    port: 1506, // 端口号
    https: false,
    open: true, // 配置自动启动浏览器
    openPage: 'index.html',
    // 配置多个代理
    proxy: {
      '/api': {
        target: 'http://yapi.tcy365.org:3000/mock/975/', // 本地模拟数据服务器
        changeOrigin: true
        //logLevel: 'debug' //是否输出请求log
      }
    }
  }
};
