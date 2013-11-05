# JackHq.com

Company Web Site

* Team
* Philosophy
* Community
* Contact

## Requires

`ruby` 1.9

## Dev Env

```
bundle install
rackup
```

## Updating Site

Create a branch and submit a pull request.

To add/change team member simply edit the team.yaml file and add the image to the `public/img` folder



## Testing

Requires NodeJs > 0.3.7
Requires Coffee-Script 1.0.1
Requires Vows Latest
Requires Zombiejs

On a Mac

Install node and npm via
with npm install:

    npm install coffee-script     
    npm install vows     
    npm install zombie     

To run the tests

    time vows test/*  --spec    


