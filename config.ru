$LOAD_PATH.unshift(File.dirname(__FILE__))


require 'sinatra'
require 'haml'
require 'yaml'
require 'app'

run Sinatra::Application
