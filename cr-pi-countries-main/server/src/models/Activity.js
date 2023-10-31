//define un modelo 'Activity' con atributos específicos y reglas sobre qué tipos de valores se pueden almacenar en cada campo.
//El uso de ENUM en Sequelize permite restringir los valores que pueden ser almacenados en estos campos a una lista específica.
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Activity', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING, 
      allowNull: true,
    },
    difficulty: {
      type: DataTypes.ENUM('1', '2', '3', '4', '5'),
      allowNull: true
    },
    duration: {
      type: DataTypes.ENUM('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'),
      allowNull: true
    },
    season: {
      type: DataTypes.ENUM('Summer', 'Autumn', 'Winter', 'Spring'),
      allowNull: true
    }
  });
};