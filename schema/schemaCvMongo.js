const mongoose = require('mongoose');

const { Schema, model} = mongoose;

// Schéma pour les petites sections
const PetiteSectionSchema = new Schema({
    titre_petite_section: String,
    donnees: [String]
});

// Schéma pour les grandes sections
const GrandeSectionSchema = new Schema({
    titre_grande_section: String,
    petite_section: [PetiteSectionSchema]
});

// Schéma pour les divisions
const DivSchema = new Schema({
    titre_div: String,
    grande_section: [GrandeSectionSchema]
});

// Schéma principal pour le CV
const CvSchema = new Schema({
    langue: String,
    titre_principal: String,
    div: [DivSchema]
});

const Cv = model("cv", CvSchema, "cv");

module.exports = Cv;