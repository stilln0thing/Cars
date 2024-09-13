'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Car.init({
    model_name: {
      type: DataTypes.STRING,
      allowNull : false, 
      unique: true
    },
    brand:{
      type:DataTypes.STRING,
      allowNull: false
    },
    year:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type:DataTypes.DECIMAL,
      allowNull: false
    },
    engine_type:{
      type: DataTypes.STRING,
      allowNull: false
    },
    horsepower:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image_url:{
      type: DataTypes.TEXT,
      allowNull: false
    },
    model_3d_url:{
      type: DataTypes.TEXT,
      allowNull: false
    },
    scale: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    posx: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    posy: {
      type: DataTypes.INTEGER, 
      allowNull: false
    },
    posz: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    time: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    range:{
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};