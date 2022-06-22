'use strict';
import { Model, UUIDV4 } from 'sequelize';

interface BreedUserAttribute{
  id: string;
  photo: string
}

module.exports = (sequelize: any, DataTypes: any) => {
  class BreedUser extends Model<BreedUserAttribute> implements BreedUserAttribute{
    id!: string;
    photo!: string;
    static associate(models: any) {
      // define association here
      BreedUser.belongsTo(models.BreedCat)
    }
  }
  BreedUser.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    tableName: 'breed_user',
    modelName: 'BreedUser',
  });
  return BreedUser;
};