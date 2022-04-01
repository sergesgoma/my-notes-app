// models
const Note = require('../models/Note');

const mainController = {
    homePage: async (req, res) => {
        Note.find({}, (err, notes) => {
            res.render('index', {notes: notes});
        })
    },
    addNotePage: async (req, res) => {
        res.render('add-note');
    },
    addNote: async(req, res) => {
        const note = new Note({
            title: req.body.title,
            description:req.body.description,
            date:req.body.date,
            color:req.body.color
        });
        try {
            await note.save();
            res.redirect('/');
        }
        catch(err) {
            res.redirect('/');
        }
        
    },
    editNotePage: async (req, res) => {
        const id = req.params.id;
        Note.find({}, (err, notes) => {
        res.render('edit-note.ejs', { notes: notes, idNote: id });
        })
    },
    editNote: async (req, res) => {
        const { id } = req.params;
        Note.findByIdAndUpdate(id, {
            title: req.body.title,
            description:req.body.description,
            date:req.body.date,
            color:req.body.color 
        }, err => {
            if (err) return res.send(500,err);
        res.redirect('/');
        });
    }, 
    deleteNote: async (req,res) => {
        const { id } = req.params;
        Note.findByIdAndDelete(id, err => {
        if (err) return res.send(500, err);
        res.redirect("/")
    });
    },
    filterPersonal: async (req,res) => {
        Note.find({color: 'red'}, (err, notes) => {
            res.render('index', {notes: notes});
        }) 
    },
    filterWork: async (req,res) => {
        Note.find({color: 'green'}, (err, notes) => {
            res.render('index', {notes: notes});
        })
    },
    filterImportant: async (req,res) => {
        Note.find({color: 'blue'}, (err, notes) => {
            res.render('index', {notes: notes});
        })
    },
    filterOther: async (req,res) => {
        Note.find({color: 'grey'}, (err, notes) => {
            res.render('index', {notes: notes});
        })
    
    }          

};

module.exports = mainController;
