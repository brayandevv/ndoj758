'use strict'

const Installer = use('App/Installer/index.js')
const ace = require('@adonisjs/ace')
var cmd=require('node-cmd');

class InstallerController {

    async index(){
        //console.log(new Installer().setup())
        
        let output = "installer page"
        cmd.get(
            'node ace  migration:status',
            function(err, data, stderr){
                 console.log('cmd run :\n\n',data)
                
            }
        )
     
        return output
    }
}

module.exports = InstallerController
