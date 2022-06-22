import db from "./../../config/Database/models"
const sequelize = require('sequelize');
const {Op} = require('sequelize');
var urlsafe = require('url-safe-base64');
const fs = require("fs");
const axios = require("axios");

const DB: any = db;
const { BreedCat, BreedVitalStats, BreedUser} = DB;

export default class BreedService{
    async getAllBreeds(){
        try{
            let breed = await BreedCat.findAll()
            return breed;
        }
        catch(error: any){
            throw(error.message);
        }
    }

    async getBreedInfo(id_no: string){
        try{
            let info = await BreedCat.findAll({
                include:[
                    {
                        model: BreedVitalStats,
                        attributes: []
                    }
                ],
                attributes:[
                    "id",
                    "breed_name",
                    [sequelize.col('BreedVitalStats.life_span'), 'life_span'],
                    [sequelize.col('BreedVitalStats.length'), 'length'],
                    [sequelize.col('BreedVitalStats.weight'), 'weight'],
                    [sequelize.col('BreedVitalStats.origin'), 'origin'],
                    [sequelize.col('BreedVitalStats.description'), 'desc']
                ],
                where:{
                    id: id_no
                },
            })
            if (info.length != 1){
                throw(new Error("id invalid"))
            }
            return info
        }
        catch(error: any){
            throw(error.message)
        }
    }

    async addBreed(breed: any){
        try{
            let newBreed = await BreedCat.create({
                breed_name: breed.breed_name
            })
            // let newBreedInfo = await BreedVitalStats.create({
            //     life_span: breed.life_span,
            //     length: breed.length,
            //     weight: breed.weight,
            //     origin: breed.origin,
            //     description: breed.desc
            // })
        }
        catch(error: any){
            throw(error.message)
        }
    }

    async addUserBreed(photoURL : string){
        try{
            let userBreed = await BreedUser.create({
                photo: photoURL
            })
        }
        catch(error: any){
            throw(error.message)
        }
    }

    encodeImage(photoPath: string){
        var imageAsBase64 = fs.readFileSync(photoPath, 'base64');
        const safe = urlsafe.encode(imageAsBase64).replace(/\./g,"");;
        fs.writeFile('hasil.txt', safe, function (err: any,data: any) {
            if (err) {
              return console.log(err);
            }
            console.log(data);
          });
        
        return safe;
    }

    async getBreedPhoto(breed: string){
        try{
            let path = await BreedCat.findAll({
                where:{
                    breed_name: sequelize.where(sequelize.fn('LOWER', sequelize.col('breed_name')), 'LIKE', '%'+breed+'%')
                },
                raw: true
            })
            if (path.length !== 1){
                throw(new Error("breed is not detected"))
            }
            console.log(path)
            var imageAsBase64 = fs.readFileSync(path[0].photo_path, 'base64');

            return {
                id: path[0].id,
                breed_name: path[0].breed_name,
                img: imageAsBase64
            }
        }
        catch(error: any){
            throw(error.message)
        }
    }

    async getBreed(photoPath: string){
        try{
            //console.log("a sampai sini")
            const data = { signature_name: "serving_default", instances: [this.encodeImage(photoPath)]}
            //const response = await axios.post("https://breedclassifier.herokuapp.com/v1/models/BreedClassifier:predict", data);
            const response = await axios.post("https://oxfordclassifierapp.herokuapp.com/v1/models/OxfordClassifier:predict", data);
            // console.log("b sampai sini")
            // console.log(response.data)
            // get breed and probability score
            let scores = response.data.predictions[0].scores
            let classes = response.data.predictions[0].classes
            let maxProb : number = Math.max(...scores)
            let idxBreed = scores.indexOf(maxProb)
            let breed = classes[idxBreed].replace(/_/g, " ");
            return {
                breed_name: breed.toLowerCase(),
                probability: maxProb
            }
        }
        catch(error: any){
            throw(error.message)
        }
    }
}