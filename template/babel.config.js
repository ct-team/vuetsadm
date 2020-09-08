module.exports = {
  presets: ['@vue/app'],
  plugins: [
    [
      'component',
      {
        libraryName: 'ct-dart',
        styleLibraryName: 'style'
      }
    ]
  ]
};
