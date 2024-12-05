var express = require('express');
var router = express.Router();
let Pet = require('../model/pet')
const pet = require('../model/pet');
let petController = require('../controllers/pet.js')
/* Get route for the pet list - Read Operation */
/*
GET, 
Post, 
Put --> Edit/Update
*/

/* Read operation --> Get route for displaying the pets list*/


router.get('/',async(req,res,next)=>{
    try{
        const PetList = await Pet.find();
        res.render('Pet/list',{
            title:'Pet Shop Information',
            displayName: req.user ? req.user.displayName: '',
            PetList:PetList
        })
    }
    catch(err){
        console.error(err)
        res.render('Pet/list',{
            error:'Error on Server'})
    }
})
/* Create operation --> Get route for displaying the Add Page */
router.get('/add', async(req, res,next) => {
    try {
        res.render('Pet/add',{
            title: 'Add Pet Information',
            displayName: req.user ? req.user.displayName: ''
        });
    }
    catch(err)
    {
        console.error(err)
        res.render('Pet/list',{
            error:'Error on Server'})
    }
});
/* Create Operation --> Post route for Processing the Add Page */
router.post('/add', async(req, res,next) => {
    try {
        /* change this up for the assignment or project */
        let newPet = Pet({
            "PetName": req.body.PetName,
            "Age": req.body.Age,
            "Breed": req.body.Breed,
            "Description": req.body.Description,
            "Price": req.body.Price
        });
        Pet.create(newPet).then(()=> {
            res.redirect('/petslist');
        })

    }
    catch(err)
    {
        console.error(err)
        res.render('Pet/list',{
            error:'Error on Server'})
    }
});
/* Update operation --> Get route for displaying the Edit Page */
router.get('/edit/:id',async(req, res,next) => {
    try {

        const id = req.params.id;
        const petToEdit = await Pet.findById(id);
        res.render('Pet/edit',
            {
                title: 'Edit Pet Information',
                displayName: req.user ? req.user.displayName: '',
                Pet:petToEdit
            }
        )

    }
    catch(err)
    {
        console.error(err)
        next(err); //passing the error
    }
});
/* Update Operation --> Post route for Processing the Edit Page */
router.post('/edit/:id',async(req, res,next) => {
    try {
        let id=req.params.id;
        let updatedPet = Pet({
            "_id":id, 
            "PetName":req.body.PetName,
            "Age":req.body.Age,
            "Breed":req.body.Breed,
            "Description":req.body.Description,
            "Price":req.body.Price
        })
        Pet.findByIdAndUpdate(id, updatedPet).then(()=>{
            res.redirect('/petslist')
        })
    }

    catch(err)
    {
        console.error(err)
        res.render('Pet/list',{
            error:'Error on Server'})
    }
});
/* Delete Operation --> Get route to perform Delete operation */
router.get('/delete/:id',async(req, res, next) => {
    try{
        let id=req.params.id;
        Pet.deleteOne({_id:id}).then(()=>{
            res.redirect('/petslist')
        })
    }
    catch(err){
        console.error(err)
        res.render('Pet/list',{
            error:'Error on Server'})
    }
});
module.exports = router;