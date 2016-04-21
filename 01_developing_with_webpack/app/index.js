require('es6-promise').polyfill();
var Promise = require('es6-promise').Promise;
require('./main.css');
var component = require('./component');
var app = document.createElement('div');
document.body.appendChild(app);
app.appendChild(component());
