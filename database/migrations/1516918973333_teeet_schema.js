'use strict'

const Schema = use('Schema')

class TeeetSchema extends Schema {
  up () {
    this.create('teeets', (table) => {
      table.increments()
      table.timestamps()
      table.string('tyo', 255)
    })
  }

  down () {
    this.drop('teeets')
  }
}

module.exports = TeeetSchema
