'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')



var dir = require('node-dir');
dir.files(__dirname, function(err, files) {
    if (err) throw err;
    console.log(files);
});




Route.get('/setup','InstallerController.index')

Route.on('/').render('Landing.index')


    


Route.on('/a').render('Talent.dashboard')
Route.on('/b').render('Talent.index')

