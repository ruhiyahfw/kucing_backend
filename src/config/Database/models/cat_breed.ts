'use strict';
import { Model } from 'sequelize';

interface CatBreedAttribute{
  id: number;
  breed_name: string;
  photo_path: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class BreedCat extends Model<CatBreedAttribute> implements CatBreedAttribute{
    id!: number;
    breed_name!: string;
    photo_path! : string;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      BreedCat.hasOne(models.BreedUser);
      BreedCat.hasMany(models.BreedVitalStats);
    }
  }
  BreedCat.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    breed_name: {
      type:DataTypes.STRING,
    },
    photo_path: {
      type:DataTypes.STRING,
    }
  }, {
    sequelize,
    tableName: 'breed_cats',
    modelName: 'BreedCat',
    timestamps:false
  });
  return BreedCat;
};