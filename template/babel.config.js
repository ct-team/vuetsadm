module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    //增加属性开始
    [
      'component',
      {
        libraryName: 'ct-dart',
        style: false
      }
    ]
    //增加属性结束
  ]
};
