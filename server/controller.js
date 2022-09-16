const { json } = require('express');
const db = require('./db.json')
const fs = require('fs')
module.exports = {
    

    getClients: async (req, res) => {
        const clients = (db)

        res.status(200).send(clients);
    },


    createClient: (req, res) => {

        // ADD VALIDATOR
        
        let { name, company, phone, email, status, notes} = req.body
        fs.readFile(__dirname + '/db.json', 'utf8', function readFileCallback(err, data){
            if (err){
                console.log(err);
            } else {
            obj = JSON.parse(data); //now it an object
            obj.push({
                id: db.length + 1,
                name: name, 
                company: company,
                phone: phone,
                email: email,
                status: status,
                notes: notes}); //add some data
            let json = JSON.stringify(obj); //convert it back to json
            fs.writeFile(__dirname + '/db.json', json, 'utf8', err => {
                if (err) {
                  console.error(err);
                }
                // file written successfully
              }); // write it back 

        }});


        // db.push({
        //     id: db.length + 1,
        //     name: name, 
        //     company: company,
        //     phone: phone,
        //     email: email,
        //     status: status,
        //     notes: notes

            
        //  })
         res.status(200).send({message: 'added a new client'});
         console.log(name)
    },
    
    deletePerson: (req,res) => {
        let {name} = req.params

        for(let i = 0; i <db.length; i++){
            if (name === db[i].name){
                db.splice(i, 1)
            }
        }

        res.send(db)
    }
}

// const db = [
//     {
//         id: '01',
//         name: 'Ryan Anderson',
//         company: 'DevMountain',
//         phone: '801-123-4567',
//         email: 'ryan@gmail.com',
//         status: 'Working',
//         notes: '#',

//     },
//     {
//         id: '02',
//         name: 'Egha Kusuma',
//         company: 'Devmountain',
//         phone: '801-234-5678',
//         email: 'egha@gmail.com',
//         status: 'Pending',
//         notes: '#',
//     },
//     {
//         id: '03',
//         name: 'Jared Collier',
//         company: 'DevMountain',
//         phone: '801-345-6789',
//         email: 'jared@gmail.com',
//         status: 'Follow Up',
//         notes: '#',
//     },
// ]
