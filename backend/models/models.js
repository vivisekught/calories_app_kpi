const sequelize = require('../db')
const {DataTypes} =require('sequelize')

const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, defaultValue: "PRIMARY"} // exists primary user, and premium user
})

const User_data = sequelize.define('user_data',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, defaultValue: "User"},
    data_of_birthday: {type: DataTypes.DATE},
    country: {type: DataTypes.STRING, },
    phone_number: {type: DataTypes.INTEGER },
    photo: {type: DataTypes.STRING}
})

const User_body_data = sequelize.define('user_body_data',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.INTEGER, allowNull: false},
    gender: {type: DataTypes.STRING, allowNull: false},
    weight: {type: DataTypes.INTEGER, allowNull: false},
    height: {type: DataTypes.INTEGER, allowNull: false},
    aim_weight: {type: DataTypes.INTEGER, allowNull: false},
})

const Lifestyle = sequelize.define('lifestyle',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    coefficient: {type: DataTypes.DOUBLE},
})

const Activity_history = sequelize.define('activity_history',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Activity_per_day = sequelize.define('activity_per_day',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date: {type: DataTypes.DATE, allowNull: false},
    number_of_calories: {type: DataTypes.INTEGER},
    // breakfast_meal_id: {type: DataTypes.INTEGER, unique: true},
    // lunch_meal_id: {type: DataTypes.INTEGER, unique: true},
    // dinner_meal_id: {type: DataTypes.INTEGER, unique: true},
})

const Activity = sequelize.define('activity',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING},
    number_of_calories: {type: DataTypes.INTEGER}
})

const Calories_history = sequelize.define('calories_history',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Calories_per_day = sequelize.define('calories_per_day',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date: {type: DataTypes.DATE, allowNull: false},
    number_of_calories: {type: DataTypes.INTEGER},
    // breakfast_meal_id: {type: DataTypes.INTEGER, unique: true},
    // lunch_meal_id: {type: DataTypes.INTEGER, unique: true},
    // dinner_meal_id: {type: DataTypes.INTEGER, unique: true},
})

const Meal = sequelize.define('meal',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    calories: {type: DataTypes.INTEGER},
    times: {type: DataTypes.TIME},
    photo: {type: DataTypes.STRING}
})
User.hasOne(User_data)
User_data.belongsTo(User)

User.hasOne(User_body_data)
User_body_data.belongsTo(User)

User_body_data.hasMany(Lifestyle)
Lifestyle.belongsTo(User_body_data)

User.hasOne(Activity_history)
Activity_history.belongsTo(User)

User.hasOne(Calories_history)
Calories_history.belongsTo(User)

Activity_history.hasMany(Activity_per_day)
Activity_per_day.belongsTo(Activity_history)

Activity_per_day.hasMany(Activity)
Activity.belongsTo(Activity_per_day)

Calories_per_day.hasMany(Meal)
Meal.belongsTo(Calories_per_day)