require('dotenv').config();
const mongoose = require('mongoose');

const MONGO_USER = process.env.MONGO_USER;
const MONGO_MDP = process.env.MONGO_MDP;
const MONGO_AUTH_DATABASE = process.env.MONGO_AUTH_DATABASE;
const MONGO_DATABASE = process.env.MONGO_DATABASE;
const MONGO_HOST = process.env.MONGO_HOST;
const MONGO_PORT = process.env.MONGO_PORT;

const encodedUser = encodeURIComponent(MONGO_USER);
const encodedPassword = encodeURIComponent(MONGO_MDP);
const encodedAuthDatabase = encodeURIComponent(MONGO_AUTH_DATABASE);
const encodedDatabase = encodeURIComponent(MONGO_DATABASE);
const encodedHost = encodeURIComponent(MONGO_HOST);
const encodedPort = encodeURIComponent(MONGO_PORT);


const url = `mongodb://${encodedUser}:${encodedPassword}@${encodedHost}:${encodedPort}/${encodedDatabase}?authSource=${encodedAuthDatabase}`;

async function getConnection() {
    try {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connexion réussi à la base de donnée");
    } catch (error) {
        console.error("Erreur de connexion à la base de données : ", error);
    }
}

module.exports = getConnection;

