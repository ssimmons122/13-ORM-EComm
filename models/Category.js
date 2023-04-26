const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define id_columns
    id: {
      type: DataTypes.INTEGER, 
      allowNull : false, 
      primaryKey: true,
      autoIncrement: true
  },
   //define category columns
    category_name: {
    type: DataTypes.STRING,
    allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
