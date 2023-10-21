const { Router } = require("express");
const getCountriesAll = require("../controllers/getCountriesAll");
const getActivities = require("../controllers/getActivities")





const router = Router();
router.use('/countries',getCountriesAll);
router.use('/activity', getActivities);








module.exports = router;