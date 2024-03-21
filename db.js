
const mongoose = require('mongoose');

const url = "mongodb://localhost:27017/cv_remi_girard";

async function getConnection() {
    try {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connecté à MongoDB avec Mongoose");
    } catch (error) {
        console.error("Erreur de connexion à la base de données : ", error);
    }
}

module.exports = getConnection;

