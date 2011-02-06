zombie = require 'zombie'
assert = require 'assert'
vows = require 'vows'
jackhq = vows.describe('team page')
server = "http://localhost:9292"

jackhq.addBatch({
  "should":
    topic: -> zombie.visit server, @callback
    "have Team in title": (browser) -> 
      assert.equal browser.text('title'), "Jack Russell Software - Team"
    "have Tom as Team mate": (browser) ->
      assert.equal browser.text('.mate-name:first'), "Tom Wilson"
    "have Andrew as second Team mate": (browser) ->
      assert.equal browser.text('.mate-name:last'), "Robert Pearce"
}).export(module)
