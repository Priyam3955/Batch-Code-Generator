const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

const db = new Sequelize('sampledb1' , 'sampleuser1' , 'samplepass1', {
    host : 'localhost',
    dialect : 'mysql'
})
// Creating a model
const Student = db.define('student' , {
    name : {
        type: DataTypes.STRING(40) ,
        allowNULL : false,
    },
    age : {
        type: DataTypes.INTEGER(2),
        allowNULL : false,
        defaultValue : -1
    },
    // name : DataTypes.STRING(40),
    // age : DataTypes.INTEGER(2)
}) 

const task = async () => {
    try{
        await db.sync()

        //Insert a student
        for(let i = 0; i< 30;i++){
        await Student.create({
            name : (['Ram' , 'Shyam' ,'John' ,'Priyam','Anmol'])[parseInt(Math.random() * 10)],
            age : 10 + parseInt(Math.random() * 10),
        })
    }
        // await Student.create({
        //     name : "Some Person",
        //     age : 20,
        // })
    }catch(e){
        console.log(e)
    }
} 
task()



// exported from model.js and imported in insert.js 
module.exports ={
    db
}


// {alter : true} is to be done to makes changes in the existing table
// in place of alter we can write force but its destructable the previous table
// db.sync({alter : true})
//   .then(() => console.log('Database synchronised'))
//   .catch(console.error)