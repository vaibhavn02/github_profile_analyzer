GitHub Profile Analyzer API

Overview:

This project is a backend API built using Node.js, Express.js, and MySQL. It analyzes GitHub user profiles using the GitHub public API and stores useful insights in a database.


Features:

Fetch GitHub user profile data
Store profile insights in MySQL
Avoid duplicate entries (update existing data)
Get all analyzed profiles
Get a single profile by username


Technology Used:
Node.js
Express.js
MySQL
GitHub API


Setup Instructions:

Clone the repository:
git clone <your-repo-link>
cd github-profile-analyzer
Install dependencies:
npm install
Create .env file:
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=github_analyzer
Run server:
node server.js


API Endpoints:

Analyze Profile
GET /api/analyze/:username

Get All Profiles
GET /api/profiles

Get Single Profile
GET /api/profiles/:username


Database Schema:

Table: profiles

id (INT, PK)
username (VARCHAR, UNIQUE)
followers (INT)
following (INT)
public_repos (INT)
profile_url (TEXT)
analyzed_at (TIMESTAMP)


Live API


Author
Vaibhav Ramakant Nikam