const express = require("express");
const Cv = require("../schema/schemaCvMongo");
const CvRouter = express.Router();


CvRouter.get("/cv/:langue", async (req, res) => {
    const langue = req.params.langue;
   
    try {
        const cv = await Cv.findOne({ langue: langue });
        
        if (!cv) {
            console.log("CV non trouvé");
            return res.status(404).json({ error: "CV non trouvé" });
        }
        console.log("le Cv.findOne dans CV.js côté server fonctionne");
        res.json(cv);
    }
    catch (err) {
        console.error("le Cv.findOne dans CV.js côté server ne fonctionne pas");
        res.status(500).send("Erreur lors de la récupération du CV");
    }
});

module.exports = CvRouter;