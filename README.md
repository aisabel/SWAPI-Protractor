

# App specs

Welcome to our Star Wars Search web application. Our app is for the Star Wars enthusiasts who would like to find some information for some of 
their favorite characters and planets.

So, what you should expect when using this app are the following:

-	When you search for a character and it’s a valid one, then you should be able to see his / her “Gender”, “Birth year”, “Eye color” and “Skin color”.
-	When you search for a planet and it’s a valid one, then you should be able to see its “Population”, “Climate” and “Gravity”.

-	When you search for a character and it’s not a valid one, then you should be able to see “Not found” in the results.
-	When you search for a planet and it’s not a valid one, then you should be able to see “Not found” in the results.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli)

## Requirements
- NodeJS 10
- Chrome browser
- Tested on windows 10

## Installation

```
npm install 
npm install -g protractor

The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:
webdriver-manager update
```

## Run

Run `ng serve` in one terminal
Navigate in browswer to `http://localhost:4200/`. 
You can search by people and planets there.
To search by people use `Luke Skywalker`, `Leia Organa` or `r2`. Use `Darth` to see multiple results.  
To search by search by planets use `Alderaan`, `Hoth`.


## Running end-to-end tests
In a diferent terminal locate yourself in the root folder where testframework is stored then run:
protractor protractor.conf.js


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

The actual backend we're hitting is [SWAPI (Star Wars API)](https://swapi.dev/documentation)
