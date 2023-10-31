const { Router } = require('express');
const { Activity, Country } = require('../db');

const router = Router();

router.get('/', async (req, res) => {
    const allActivities = await Activity.findAll({ include: Country })
    //filtro para el front que trae todas las actividades
    const filterA = allActivities.map(e => e.name.toLowerCase()) // obtengo los nombres de las actividades en minúsculas y elimino los duplicados 
    const total = filterA.filter((item, index) => {
        return filterA.indexOf(item) === index;
    })
    res.json(total)
});

router.post('/', async (req, res, next) => { // creo una nueva actividad en la base de datos 

    const {
        name,
        difficulty,
        duration,
        season,
        countries
    } = req.body;

    try {
        let activity = await Activity.create({ name, difficulty, duration, season }) // se crea la activiad 
        await activity.setCountries(countries) // se asocian los paises realacionados con es actividad 

        let activityWithCountry = await Activity.findOne({ //realizo una busqueda de laa ctividad creada junto con el pais asociado, envio la respuesta al front 
            where: { name: name },
            attributes: {
                exclude: ['updatedAt', 'createdAt'],
            },
            include: {
                model: Country,
                through: {
                    attributes: []
                }
            }
        })
        res.json(activityWithCountry)
    } catch (error) {
        next(error)
    }

});

module.exports = router;