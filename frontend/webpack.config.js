  use: [
    "html-loader",
    {
      loader: "html-loader",
    },
  ];
  
  {
    module: {
      rules: [
        { test: /\.html$/, loader: 'html-loader' },
      ];
    }
  }
  