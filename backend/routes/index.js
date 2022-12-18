const Router = require('express')
const router = new Router()

const activities_per_dayRouter = require('./activities_per_dayRouter')
const activityRouter = require('./activityRouter')
const calories_per_dayRouter = require('./calories_per_dayRouter')
const mealRouter = require('./mealRouter')
const user_dataRouter = require('./user_dataRouter')
const userRouter = require('./userRouter')



router.use('/user', userRouter)
router.use('/activities_per_day', activities_per_dayRouter)
router.use('/activity', activityRouter)
router.use('/calories_per_day', calories_per_dayRouter)
router.use('/meal', mealRouter)
router.use('/user_data', user_dataRouter)

module.exports = router