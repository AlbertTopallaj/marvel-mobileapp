# Marvel-MobileApp

A React Native mobile app for reviewing your favorite Marvel Cinematic Univerise movies.

## Purpose

 The apps purpose is to easily make reviews at some of the Marvel Cinematic Universe best movies (according to the dev). Although this project was made because of educational purposes which involves learing of React-Native, fetching from a API to a react-native project, using mobile features, authentication and authorization and much more.

## REST API

This app is using a REST-API made by myself which is named **marvel-api**. The API contains three movies and also handles the whole register and login features and reviews. 

Repository: [https://github.com/AlbertTopallaj/marvel-api]

> **Note:** If you want to experience the whole experience, you must have the marvel-api running on your

## Features

- Register a user
- Login
- Make a review
- Delete a review
- Share a review
- View movies
- Logout
- Delete user account
- View the users reviews in Profile

## How does register and login work?

Registration and login are handled by the marvel-api built with **Java with Spring Boot**. JWT-tokens are issued by the API for the authentication to work. 

The app uses two seperate navigators that are using conditional rendering based of if the user is logged in or not.

- **NonAuthNavigator** - shows the Register and Login Screens.
- **AppNavigator** - shows the user profile and the user can make reviews.

New users must register first, then they can log in to experience and access the other authenticated features.

## What local-storage does the marvel-mobileapp use?

### There is only one type of local-storage that the app uses and that is Secure-Store for credentials. There is no need for actually Async-storage since the app doesnt involve any feature requiring that. Secure-Store is better used for credentials then Async-storage since it involves more hidden storage. 

## What mobile feature does the marvel-mobileapp use?

### The app uses the Share feature which is used for sharing reviews. 

## How to install the marvel-mobileapp

### Step 1, you will need a empty folder 
### Step 2, you will then need to clone this git-repo using `git clone https://github.com/AlbertTopallaj/marvel-mobileapp` in the terminal where your folder is.
### Then you have successfully installed the app on your machine

## How to start the marvel-mobileapp

### Step 1, make sure you have a emulator on your machine. Preferably Android studio.
### Step 2, choose any device in Android Studio
### Step 3, start the device in Android Studio
### Step 4, go back to where you have the marvel-mobileapp on your machine.
### Step 5, go to your terminal and enter `npx expo start`
### Step 6, wait until the terminal has done thinking.
### Step 7, in the terminal, press a
### Then you will have the marvel-mobileapp start in the emulator on your machine

## Known problems or limitations

### The loading symbol might not be visible at everytime.

# NOTE: THE MARVELMOBILEAPP WILL NOT WORK IF THE MARVEL-API IS NOT RUNNING ON YOUR MACHINE.
# YOU WILL NEED TO `git clone https://github.com/AlbertTopallaj/marvel-api`