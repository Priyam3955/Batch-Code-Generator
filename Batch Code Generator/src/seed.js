// Seeding database with initial values
const {db, Center ,Season , Batch, Course ,Teacher} = require('./models')

const seed = async () => {
    try {
         db.sync({alter : true})

         await Center.bulkCreate([   // this is an array 
             {id : 'pp', name: 'Pitampura' ,city :'New Delhi'},
             {id : 'DW', name: 'Dwarks' ,city :'New Delhi'},
             {id : 'NO', name: 'Noida' ,city :'New Delhi'},
             {id : 'DD', name: 'Dehradun' ,city :'Dehradun'},
             {id : 'OL', name: 'Online' ,city :'New Delhi'},
         ] , {
             ignoreDuplicates : true  // this means that primary key will runs one time
             // i.e above keys are for e.g. pp , DW ,NO 
         }) 
    } catch (e) {
         console.error(e)
    }
}
seed()