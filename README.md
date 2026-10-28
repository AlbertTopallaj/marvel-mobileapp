# Marvel-MobileApp

## Purpose

### The apps purpose is to easily make reviews at some of the Marvel Cinematic Universe best movies (according to the dev). Although this project was made because of educational purposes which involves learing of React-Native, fetching from a API to a react-native project, using mobile features, authentication and authorization and much more.

## REST API

### This app is using a REST-API made by myself which is named marvel-api. The API contains three movies and also handles the whole register and login features and reviews. 

## Features

### Register a user
### Login
### Make a review
### Delete a review
### Share a review
### View movies
### Logout
### Delete user account
### View the users reviews in Profile

## How does register and login work?

### The register and login is fully developed in Java with Spring boot and uses JWT tokens for autentication. In the app itself there are two different navigators which are shown based of if the user is logged in or not, this is based on conditional rendering. The user must first register a account in the register screen, if they doesnt have a account. Then they must navigate to the login screen where they login with the newly registered account. After login they will be able to see the other navigator which lets them write reviews and see their own profile. 