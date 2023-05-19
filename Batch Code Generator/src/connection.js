const {DataTypes} = require('sequelize')

const {db} = require('./models')

const course = db.define('course' ,{
   id:{
       type : DataTypes.STRING(2),
       primaryKey : true
   },
   name: DataTypes.STRING(20)
})
const Teacher = db.define('teacher' , {
    name : {
        type : DataTypes.STRING(35),
        allowNull : false   // this means that teacher's name can't be null.
    }
})
const Center = db.define('center' , {
    id: {
        type : DataTypes.STRING(2),
        primaryKey : true
    },
    name: {
        type: DataTypes.STRING(15),
        allowNull : false
    },
    city: {
        type: DataTypes.STRING(15),
        allowNull : false
    }
})

const Season = db.define('season' ,{
    id: {
        type : DataTypes.STRING(2),
        primaryKey : true
    },
    name: {
        type: DataTypes.STRING(15),
        allowNull : false
    },
})

const Batch = db.define('batch' , {
    code : {
        type: DataTypes.STRING(8),
        primaryKey: true
    },
    year : DataTypes.INTEGER(4),
    start : DataTypes.DATE,
    end : DataTypes.DATE,
})

// how models ARE associated between each other
// association

Batch.belongsTo(course)
Batch.belongsTo(Center)
Batch.belongsTo(Season)

course.hasMany(Batch)  // This means each course has many batches
Center.hasMany(Batch)  // Eaach center has many batches involved in that
Season.hasMany(Batch)  

//Foreign keys are Season ID, Course ID , Center ID
