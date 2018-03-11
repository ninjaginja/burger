# burger

### Overview
A Node, Express, Handlebars, and MySQL burger app that accepts user inputs for the names of burgers they'd like to eat... and then an option to devour them! You can view the app live on Heroku here.

### Functionality
Using an ORM, the app has 3 basic CRUD functions...

- READ all entries from the MySQL database and display them to the DOM using Handlebars.

- CREATE a new burger using the "Place Order" form, which hits a /burger/create route in Express to insert a new burger into the MySQL database and reroutes the webpage back to the index, where the burger is now ready to be eaten column (via Handlebars).

- UPDATE a selected burger by clicking "Devour It", which hits a route in Express to change its "devoured" status in the MySQL database and reroutes the webpage back to the index, where the burger is now in the devoured column (via Handlebars).

The app's front-end design uses Bootstrap.

### Screenshot
![screenshot](https://raw.githubusercontent.com/ninjaginja/burger/master/public/assets/img/Eat-da-Burger_screenshot.png)
