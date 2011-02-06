require 'sinatra'
require 'haml'
require 'yaml'

get '/' do
  @title = 'Team'
  @team = YAML.load_file('team.yaml')
  haml :index
end

get '/philosophy' do
  @title = 'Philosophy'
  haml :philosophy
end

get '/community' do
  @title = 'Community'
  haml :community
end

get '/contact' do
  @title = 'Contact'
  haml :contact
end



get '/stylesheets/app.css' do
  sass :app
end


