require('dotenv').config();
const express= require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const PORT = process.env.PORT || 3000;
const Clean = require('./models/clean');

// Middleware Below
app.use(express.urlencoded({extended: true})); //parse Form Data
app.use(express.json()); // parse raw json data
app.use(methodOverride('_method'));
app.use(express.static('public'));


app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once('connected', () => console.log('Mongoose is all ready'));


// Render CRUD views Below
// NEW
app.get('/clean/new', (req, res)=>{
    res.render('New');
});
// CREATE
app.post('/clean', (req, res)=>{
    if(req.body.moreHelp === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.moreHelp = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.moreHelp = false;
    }
    Clean.create(req.body, (error, createdClean) => {
        res
            .redirect('/clean');
    });
});

// READ Routes
// INDEX
app.get('/clean', (req, res)=>{
    Clean.find({}, (error, allCleans)=>{
        res.render('Index', {
            clean: allCleans
        });
    });
});

app.get('/clean/about', (req, res) => {
    res.render('about')
});

// SHOW
app.get('/clean/:id', (req, res)=>{
    Clean.findById(req.params.id, (err, foundClean)=>{
        res
            .render('Show', {
                clean: foundClean
            });
    });
});

// DELETE
app.delete('/clean/:id', (req, res) => {
    Clean.findByIdAndDelete(req.params.id, (err) => {
        if(!err){
            res
                .status(200)
                .redirect('/clean')
        } else {
            res
                .status(400)
                .send(err)
        }
    })
})

// UPDATE
app.put('/clean/:id', (req, res) => {
    req.body.needHelp === 'on'? 
    req.body.needHelp = true : 
    req.body.needHelp = false;
    Clean.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err) => {
        if(!err){
            res
                .status(200)
                .redirect('/clean')
        } else {
            res
                .status(400)
                .send(err)
        }
    })
})
// EDIT
app.get('/clean/:id/edit', (req, res)=>{
    Clean.findById(req.params.id, (err, foundClean)=>{
        res
            .render('Edit', {
                clean: foundClean
            });
    });
});


app.listen(PORT, () => {
    console.log('listening on PORT: '+ PORT)
});