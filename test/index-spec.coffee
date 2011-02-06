vows = require 'vows'
assert = require 'assert'
zombie = require 'zombie'

vows.describe('home').addBatch({
  "connect": 
    topic: ->
      zombie.visit "http://localhost:4567", @callback
    "should have title Jack Russell Software": (browser) -> assert.equal browser.text('title'), "Jack Russell Software"
}).export(module)
