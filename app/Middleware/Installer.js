'use strict'
const Helpers = use('Helpers')
const Drive = use('Drive')


class Installer {
  
  async handle ({ response,request }, next) {
    
    // call next to advance the request
    const InstallerConfigPath = Helpers.appRoot('app/Installer/config.json')
    const InstallerConfigJson = await Drive.get(InstallerConfigPath,'utf-8')
    const InstallerConfig = JSON.parse(InstallerConfigJson)

     console.log(InstallerConfig)
     console.log(InstallerConfig.installed)
    console.log(request.url())

   

    if(!InstallerConfig.installed && request.url()!='/setup'){
      console.log('redirected to install page...')
      response.redirect('/setup')
    }
    
    await next()
    
  }
}

module.exports = Installer
