# Project Name

Budget Tracker App

## Instructions how to start

create `.env` file like the example `.env.sample`

start with `npm run start-dev`

**http://localhost:5000**

## Description

The Budget Tracker app will help users tracking the day to day expenses and income.

## USER STORIES (MVP)

**404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault

**500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault

**Landing page** - As a user I want to be able to access the landing page so that I see what the app is about and login and signup

**Sign up** - As a user I want to be able to create an account to use the app and save my tasks

**Login** - As a user I want to be able to log in on the webpage

**Logout** - As a user I want to be able to log out from the webpage

**Profile** - As a user I want to be able to see my profile and edit it

**Initial Balance** - User can check is current balance

**Transaction** - User can check the total transaction ammount

**Remaining Balance** - User can check the remaining balance

**Transaction list** - User can check the list of all transactions

**Add Transaction** - User can add an transaction

**Edit Transaction** - User can edit a previously added transaction

**Delete** - User can delete a previously added transaction

**Categories Transactions** - Transactions will be group into categories


## BACKLOG

**Search Bar** - Allow user to search for an transaction by name.

**Goals** - User can set up goals to achieve 



## ROUTES

| Name          | Method | Endpoint | Description                    | Body                         |     |
| ------------  | ------ | -------- | ------------------------------ | ---------------------------- | --- |
| Home          | GET    | /home    | See home Page                  |                              |     |
| Sign up       | POST   | /signup  | Sign up a user with an account | { mail, username, password } |     |
| Log in        | POST   | /login   | Log in the user                | { mail, password }           |     |
| Logout        | GET    | /logout  | Logout a user                  |                              |     |
| Transaction form  |        |          | User can add an transaction        |
| Expnse List   |        |          | User can check all transactions    |
| Edit Transaction  |        |
| Delete Transaction|

## MODELS

Transaction model

```js

   {
date: {
      type: String,
      required: true,
    },

name: {
    type:String,
    required: true,
    }

amount: {
    type:Number,
    required: true,
    }

description: {
        type: String,
        required: true,
    }
categories: {
	enum: [Home, Grocery, Health, Travel, Other]
   }
```

User model

```js
{


    username: {
        type: String,
        unique: true,
    }

    hashedPassword: {
        type: String,
        required: [true, 'password is required'],
    }
}
```

## LINKS

### Github project

- [Frontend project]()
- [Backend project]()

### Deploy links

- [Frontend deploy]()

### Project kanban

- https://github.com/lucioxx89/Project-Module-3/projects

### Wireframes

- [InVision with Wireframes]()

### Slides

- [Slides]()
