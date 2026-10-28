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

## What local-storage does the marvel-mobileapp use?

### There is only one type of local-storage that the app uses and that is Secure-Store for credentials. There is no need for actually Async-storage since the app doesnt involve any feature requiring that. Secure-Store is better used for credentials then Async-storage since it involves more hidden storage. 

## What mobile feature does the marvel-mobileapp use?

### The app uses the Share feature which is used for sharing reviews. 

## How to install the marvel-mobileapp

### First you will need a empty folder 
### Secondly you will then need to clone this git-repo using `git clone https://github.com/AlbertTopallaj/marvel-mobileapp` in the terminal where your folder is.
### Then you have successfully installed the app on your machine