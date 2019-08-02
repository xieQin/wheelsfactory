const babel = require("babel-core");

const jscode = `const result = 1 + 2 + 3;`

const result = babel.transform(jscode, {
  plugins:[
    require("./plugins/index")
  ]
});

console.log(result.code); // const result = 6;
