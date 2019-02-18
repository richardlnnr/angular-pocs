var concat = require('concat-files'); 

var distPath = './dist';

var compile_to = '../t3k/custom-app-a';
var compile_js = `${compile_to}/bundle.js`;
var compile_css = `${compile_to}/bundle.css`;

concat(
  [ 
    `${distPath}/custom-app-a/main.js`,
    `${distPath}/custom-app-a/runtime.js`,
    `${distPath}/custom-app-a/scripts.js` 
  ], 
  compile_js, function(err) {
     if (err) {
       throw err;
     }
     console.log('Compiled to, ', compile_js); 
  }
);

concat(
  [ 
    `${distPath}/custom-app-a/styles.css`,
  ], 
  compile_css, function(err) {
     if (err) {
       throw err;
     }
     console.log('Compiled to, ', compile_css); 
  }
);