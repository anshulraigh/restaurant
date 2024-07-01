const express = require('express');
const router = express.Router();
const Person = require('../models/Person');

router.post('/', async (req, res) => {
    try {
        const data = new Person(req.body);
        const newPerson = new Person(data);
        const savedPerson = await newPerson.save()
        res.status(200).send(savedPerson)
        console.log('Person saved successfully');
    } catch (err){
        res.status(500).send(err);
        console.log('Error while saving person:', err)
    }
})

router.get('/', async (req, res) => {
    try{
        const data = await Person.find();
        res.status(200).send(data);
        console.log('Person fetched successfully');
    }catch(err){
        res.status(500).send(err);
        console.log('Error while fetching person:', err)
    }
})

router.get('/:workType', async (req, res) => {
    try{
        const workType = req.params.workType;
        if(workType === 'chef' || workType === 'waiter' || workType === 'manager'){
            const data = await Person.find({work: workType});
            res.status(200).send(data);
            console.log('Person fetched successfully');
        }else{
            res.status(400).send('Invalid work type')
        }
    }catch(err){
        res.status(500).send(err);
        console.log('Error while fetching person:', err)
    }
})

router.put('/:id', async (req , res) => {
    try{
        const personId = (req.params.id);
        const data = req.body;
        const updatedPerson = await Person.findByIdAndUpdate(personId, data,{
            new: true, // to get the updated data
            runValidators: true // to run the validators
        })

        if(!updatedPerson){
            res.status(400).send('Invalid person id');
            console.log('Invalid person id');
        }
        res.status(200).send(updatedPerson);
        console.log('Person updated successfully');
    }catch(err){
        res.status(500).send(err);
    }
})

router.delete('/:id', async (req , res) => {
    try{
        const personId = req.params.id;
        const deletedPerson = await Person.findByIdAndDelete(personId);

        if(!deletedPerson){
            res.status(400).send({message: 'Invalid person id'});
            console.log('Invalid person id');
        }
        res.status(200).send({message: 'Person deleted successfully!'});
    }catch(err){
        res.status(500).send(err);
    }
})

module.exports = router;
