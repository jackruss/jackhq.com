zombie = require 'zombie'
assert = require 'assert'
vows = require 'vows'
jackhq = vows.describe('navigation')
server = "http://localhost:9292"

jackhq.addBatch({
  "to root":
    topic: -> zombie.visit server, @callback
    "should be successful": (err, browser, status) -> 
      assert.equal status, 200
  "to philosophy":
    topic: -> zombie.visit server, @callback
    "should be successful": (browser) ->
      browser.clickLink "Philosophy", (err, browser, status) ->
        assert.equal status, 200
  "to community":
    topic: -> zombie.visit server, @callback
    "should be successful": (browser) -> 
      browser.clickLink "Community", (err, browser, status) ->
        assert.equal status, 200
  "to contact":
    topic: -> zombie.visit server, @callback
    "should be successful": (browser) ->
      browser.clickLink "Contact", (err, browser, status) ->
        assert.equal status, 200


}).export(module)
