require 'sinatra'
require 'haml'
require 'yaml'

get '/' do
  @title = 'Team'
  @content = 'Jack Russell Software Company, is a Ruby on Rails Development shop, providing awesome mobile and web applications to HealthcareIT, we love testing, pairing and agile development.  We are constantly striving to master our craft of software development.'
  @team = YAML.load_file('team.yaml')
  haml :index
end

get '/philosophy' do
  @title = 'Philosophy'
  @content = "At Jack Russell Software, our philosophy is geared to become expert craftsman to provide the best software to our clients.  We build web and mobile applications that provide complete solutions and are focused based on our philosophy."
  haml :philosophy
end

get '/community' do
  @title = 'Community'
  @content = "At Jack Russell Software, we are extremely involved in both local and open source technical communities to share and learn to be better craftsman of software."
  haml :community
end

get '/contact' do
  @title = 'Contact'
  @content = "Please do not hesitate to contact us, if you need a software solution."
  haml :contact
end



get '/stylesheets/app.css' do
  sass :app
end


