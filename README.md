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

**Expense** - User can check the total expense ammount

**Remaining Balance** - User can check the remaining balance

**Expense list** - User can check the list of all expenses

**Add Expense** - User can add an expense

**Edit Expense** - User can edit a previously added expense

**Delete** - User can delete a previously added expense

**Categories Expenses** - Expenses will be group into categories


## BACKLOG

**Search Bar** - Allow user to search for an expense by name.

**Goals** - User can set up goals to achieve 



## ROUTES

| Name          | Method | Endpoint | Description                    | Body                         |     |
| ------------  | ------ | -------- | ------------------------------ | ---------------------------- | --- |
| Home          | GET    | /home    | See home Page                  |                              |     |
| Sign up       | POST   | /signup  | Sign up a user with an account | { mail, username, password } |     |
| Log in        | POST   | /login   | Log in the user                | { mail, password }           |     |
| Logout        | GET    | /logout  | Logout a user                  |                              |     |
| Expense form  |        |          | User can add an expense        |
| Expnse List   |        |          | User can check all expenses    |
| Edit Expense  |        |
| Delete Expense|

## MODELS

Expense model

```js

   {

name: {
    type:String,
    required: true,
    }

cost: {
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
firstName: {
    type:String,
    required: true,
    }

lastName: {
    type:String,
    required: true,
    }

    email: {
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
