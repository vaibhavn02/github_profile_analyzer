const axios = require('axios');
const db = require('../db');

const analyzeProfile = async (req, res) => {
    //res.send('Analyze Profile working');
    try {

        const username = req.params.username;

        const response = await axios.get(`https://api.github.com/users/${username}`);

        const data = response.data;

        const result = {
            username: data.login,
            followers: data.followers,
            following: data.following,
            public_repos: data.public_repos,
            profile_url: data.html_url
        };

        //INSERT into MySQL
        const query = `
            INSERT INTO profiles (username, followers, following, public_repos, profile_url) 
            VALUES (?, ?, ?, ?, ? )
            ON DUPLICATE KEY UPDATE
                followers = VALUES(followers),
                following = VALUES(following),
                public_repos = VALUES(public_repos),
                profile_url = VALUES(profile_url)
        `;
        
        db.query(query, [
            result.username,
            result.followers,
            result.following,
            result.public_repos,
            result.profile_url
        ], (err) => {
            if (err) {
                console.error('DB Error:', err);
                return res.status(500).json({ message: 'Database error' });
            }
            res.json({
                message: 'Profile analyzed and stored successfully',
                data: result
            });
        });
    } 
    catch (error) {
        res.status(404).json({ message: 'GitHub user not found' });
    }   
};

const getAllProfiles = (req, res) => {
    //res.send('Get All Profiles working');
    const query = `SELECT * FROM profiles`;

    db.query(query, (err, results) => {
        if (err) {
            console.error('DB Error:', err);
            return res.status(500).json({ message: 'Database error'});
        }
        res.json(results);
    });    
};

const getSingleProfile = (req, res) => {
    //res.send('Get Single Profile working');
    const username = req.params.username;

    const query = `SELECT * FROM profiles WHERE username = ?`;

    db.query(query, [username], (err, results) => {
        if (err) {
            console.error('DB Error:', err);
            return res.status(500).json({ message: 'Database error' });
        }
        if (results.length === 0) {
            return res.status(404).json({message: 'Profile not found'});
        }
        res.json(results[0]);
    });
};

module.exports = {
    analyzeProfile,
    getAllProfiles,
    getSingleProfile
};
