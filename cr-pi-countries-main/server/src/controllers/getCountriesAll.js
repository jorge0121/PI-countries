const { Router } = require('express');
const { Country, Activity } = require('../db');
const router = Router();

router.get('/', async (req, res) => {
    const { name } = req.query
    const allCountries = await Country.findAll({ // recupero todos los paises de la BD  e incluyo las actividades
        include: Activity
    })

    if (name) {
        const byName = await allCountries.filter(i => i.name.toLowerCase().startsWith(name.toLowerCase())) // si existe un name ignoro las mayusculas y minusculas y si hay coincidencia envio una respuesta
        byName.length ?
            res.json(byName) :
            res.status(404).send({ 'msg': 'Not found' })
    } else {
        res.json(allCountries)
    }
});

router.get('/:id', async (req, res, next) => { 
    const { id } = req.params; // obtengo el ID por parametro
    
    let countries

    try {
        if (id.length > 1) {
            countries = await Country.findByPk(id, { include: Activity }) //busco el pais por ID  
            console.log(countries);
            

            countries = {                         //Creo un objeto con toda la info del pais
                id: countries.id,
                name: countries.name,
                image: countries.image,
                continent: countries.continent,
                capital: countries.capital,
                subregion: countries.subregion,
                area: countries.area,
                population: countries.population,
                activities: countries.Activities.map((e) => {
                    return {
                        id: e.id,
                        name: e.name,
                        difficulty: e.difficulty,
                        duration: e.duration,
                        season: e.season
                    }
                })
                
                
               
            }
        }
        res.json(countries) //envio el objeto con la info necesaria
    } catch (error) {
        next(error)
    }
});

module.exports = router;