GitHub Profile Analyzer API

## Overview:

This project is a backend API built using Node.js, Express.js, and MySQL. It analyzes GitHub user profiles using the GitHub public API and stores useful insights in a database.


## Features:

Fetch GitHub user profile data
Store profile insights in MySQL
Avoid duplicate entries (update existing data)
Get all analyzed profiles
Get a single profile by username


## Technology Used:
Node.js
Express.js
MySQL
GitHub API

## Project Structure:
github_profile_analyzer/
│
├── controllers/
│ └── profileController.js
│
├── routes/
│ └── profileRoutes.js
│
├── db.js
├── server.js
├── .env
└── package.json

## Setup Instructions:

Clone the repository:
git clone https://github.com/vaibhavn02/github_profile_analyzer.git
cd github-profile-analyzer

Install dependencies:
npm install

Create .env file (FOR LOCAL ONLY):
PORT=3000
DB_HOST=localhost
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=github_analyzer

Replace your_password with your MySQL password.

Run server:
node server.js

## Live API (Deployment)
Base URL:
https://github-profile-analyzer-lbxl.onrender.com/

## API Endpoints:
1. Analyze Profile
GET /api/analyze/:username

2. Get All Profiles
GET /api/profiles

3. Get Single Profile
GET /api/profiles/:username


## Database Schema:

Table: profiles

id (INT, PK)
username (VARCHAR, UNIQUE)
followers (INT)
following (INT)
public_repos (INT)
profile_url (TEXT)




Author
Vaibhav Ramakant Nikam
