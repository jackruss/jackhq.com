require 'sinatra'
require 'haml'
require 'yaml'

get '/' do
  @team = YAML.load_file('team.yaml')
  haml :index
end

get '/philosophy' do
  haml :philosophy
end

get '/community' do
  haml :community
end

get '/contact' do
  haml :contact
end



get '/stylesheets/app.css' do
  sass :app
end


