'use strict';
import { Model } from 'sequelize';

interface BreedVitalStatsAttribute{
  id: number;
  life_span: string;
  length: string;
  weight: string;
  origin: string;
  description: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class BreedVitalStats extends Model<BreedVitalStatsAttribute> implements BreedVitalStatsAttribute {
    id!: number;
    breed_id!: number;
    life_span!: string;
    length!: string;
    weight!: string;
    origin!: string;
    description!: string;
    static associate(models: any) {
      // define association here
      BreedVitalStats.belongsTo(models.BreedCat)
    }
  }
  BreedVitalStats.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    life_span: {
      type: DataTypes.STRING,
      allowNull: false
    },
    length: {
      type: DataTypes.STRING,
      allowNull: false
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false
    },
    origin: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'breed_vital_stats',
    modelName: 'BreedVitalStats',
    timestamps:false
  });
  return BreedVitalStats;
};