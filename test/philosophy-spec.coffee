zombie = require 'zombie'
assert = require 'assert'
vows = require 'vows'
jackhq = vows.describe('website')
server = "http://localhost:9292"

jackhq.addBatch({
  "philosophy page":
    topic: -> zombie.visit server + '/philosophy', @callback
    "should have title Jack Russell Software - Philosophy": (browser) -> assert.equal browser.text('title'), "Jack Russell Software - Philosophy"
}).export(module)
