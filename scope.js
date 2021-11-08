function sayHello(name) {
	console.log('Hello ' + name);
	global.console.log('Hello ' + name); // Refer to the comment below for global objects
}

sayHello('Pawneet');


// Global Objects
// These global object belong to the window object in browser
// but in Node, these belong to global object
// console.log();
// setTimeout();
// clearTimeout();
// setInterval();
// clearInterval();


////////////////////////////////////////////////////////
/// If we use the same method name in multiple modules,
/// one will get overridden. So, we avoid methods with
/// global scope.
////////////////////////////////////////////////////////
var globalScope = function() {

}

globalScope();
////////////////////////////////////////////////////////

////////////////////////////////////////////////////////
/// Module level method / private methods
////////////////////////////////////////////////////////
console.log();
console.log('####module######');
console.log(module);
console.log('################');

// Module {
//   id: '.',
//   path: '/Users/pawneet.singh/MyApps/node_apps/first_app',
//   exports: {},
//   filename: '/Users/pawneet.singh/MyApps/node_apps/first_app/app.js',
//   loaded: false,
//   children: [],
//   paths: [
//     '/Users/pawneet.singh/MyApps/node_apps/first_app/node_modules',
//     '/Users/pawneet.singh/MyApps/node_apps/node_modules',
//     '/Users/pawneet.singh/MyApps/node_modules',
//     '/Users/pawneet.singh/node_modules',
//     '/Users/node_modules',
//     '/node_modules'
//   ]
// }
////////////////////////////////////////////////////////