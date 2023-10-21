const axios = require("axios");
const server = require("./src/server");
const { conn,Country } = require('./src/db.js');
const PORT = 3001;



conn.sync({ force: true }).then(() => {
  server.listen(PORT, async () => {
    const allCountries = Country.findAll();
    if(!allCountries.length)
    {const apiCountriesResponse = await axios.get('http://localhost:5000/countries');
    var apiCountries = apiCountriesResponse.data.map((e) => {
      return {
        name: e.name.common,
        id: e.cca3,
        image: e.flags.png,
        continent: e.continents[0],
        capital: e.capital ? e.capital[0] : 'Not found',
        subregion: e.subregion,
        area: e.area,
        population: e.population
        
      }
    })
  
   await Country.bulkCreate(apiCountries);
   console.log('Info Cargada a la BD')
    }else{
      console.log("La info ya existe");
    } 
    
    console.log(`Server listening on port ${PORT}`); // eslint-disable-line no-console
  });
}).catch(error => console.error(error))