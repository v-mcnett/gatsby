# gatsby
Gatsby.js V2 starter based on the Photon site template, designed by HTML5 UP. Check out https://codebushi.com/gatsby-starters/ for more Gatsby starters and templates.

## Installation
Run `gatsby develop` in the terminal to start.

## Updating
Run 'npm run develop' in the terminal.

## Deploying
Run 'npm run build' in the terminal.
Check into github repo to deploy to netlify. 

## Challenges
Issues updating node.js. Newer versions of node required newer versions of: gatsby-plugin-sharp, gatsby-transformer-sharp, gatsby-plugin-manifast, gatsby-plugin-favicon, which depend on the sharp plugin. Sharp plugin woudn't load. Perhaps incompabitble with version of node? 

Deleted package-lock.json and node-modules folder and re ran npm install many times. Finally reverted to node.js 8 and reinstalled to get site to load. 