import { RequestHandler } from "express";
const axios = require("axios")
const fs = require("fs");
import services from "./../services"

let breedService = new services.BreedService()

const getBreeds: RequestHandler = async (req, res) => {
    //res.send('Get Breeds');
    try{
        let result : any = await breedService.getAllBreeds()
        res.status(200).json({
            success: true,
            message: "get all breeds success",
            data: result
        })
    }
    catch (errmsg){
        res.status(404).json({
            success: false,
            message: errmsg,
            data: []
        })
    }
}

const getBreedInfo: RequestHandler = async (req, res)=> {
    let id : string = req.params.id;
    //res.send(`get breed info with id = ${id}`)
    try{
        let result : any = await breedService.getBreedInfo(id)
        res.status(200).json({
            success: true,
            message: `get breed info with id = ${id} success`,
            data: result
        })
    }
    catch (errmsg){
        res.status(404).json({
            success: false,
            message: errmsg,
            data: []
        })
    }
}

const insertBreed: RequestHandler = async (req, res) => {
    try{
        let newbreed = {
            breed_name : req.body.breed_name,
            life_span : req.body.life_span,
            length : req.body.length,
            weight : req.body.weight,
            origin : req.body.origin,
            desc : req.body.description
        }
        console.log(newbreed.breed_name)
        let result : any = await breedService.addBreed(newbreed);
        res.status(201).json({
            success: true,
            message: `add breed from user success`,
            data: result
        })
    }
    catch (errmsg){
        res.status(404).json({
            success: false,
            message: errmsg,
            data: []
        })
    }
}

const addBreedFromUser: RequestHandler = async(req, res) => {
    try{
        let url = req.body.photo;
        let result : any = await breedService.addUserBreed(url);
        res.status(201).json({
            success: true,
            message: `add breed from user success`,
            data: result
        })
    }
    catch (errmsg){
        res.status(404).json({
            success: false,
            message: errmsg,
            data: []
        })
    }
}

const detectBreed: RequestHandler = async(req: any, res) => {
    try{
        let path: string = req.file.path;
        //console.log(`1. path ${path}`)
        // get breed from AI API
        let breed_result = await breedService.getBreed(path);
        //console.log(`2. breed res : ${breed_result}`)
        // get breed photo
        let breed_info = await breedService.getBreedPhoto(breed_result.breed_name);
        res.status(200).json({
            success: true,
            message: `a cat breed is detected`,
            data:{
                id: breed_info.id,
                breed_name: breed_info.breed_name,
                photo: breed_info.img
            }
        })
    }
    catch(err){
        res.status(404).json({
            success: false,
            message: err,
            data: []
        })
    }
}

export const breedController = {
    insertBreed,
    getBreeds,
    getBreedInfo,
    addBreedFromUser,
    detectBreed
}