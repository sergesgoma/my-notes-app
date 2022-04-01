const express = require('express');
const router = express.Router();

// import de controllers
const mainController = require('./controllers/mainController');

// page d'accueil
router.get('/', mainController.homePage);

// page add-note
router.get('/add', mainController.addNotePage);
router.post('/', mainController.addNote);

// page edit-note 
router.get('/edit/:id', mainController.editNotePage);
router.post('/edit/:id', mainController.editNote);

// page delete 
router.get('/remove/:id', mainController.deleteNote);

// pages filtrées
router.get('/personal', mainController.filterPersonal);
router.get('/work', mainController.filterWork);
router.get('/important', mainController.filterImportant);
router.get('/other', mainController.filterOther);

module.exports = router;