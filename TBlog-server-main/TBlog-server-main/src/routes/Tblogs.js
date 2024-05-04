import express from 'express'
import mongoose from 'mongoose'
import {TblogModel} from "../models/Tblogs.js"
import {UserModel} from "../models/Users.js"

const router = express.Router();

router.get('/', async(req,res) => {
    try{
        const response = await TblogModel.find({});
        res.json(response);
    } catch(err){
        res.json(err);
    }
})
router.post('/', async(req,res) => {
    const tblog = new TblogModel(req.body);
    try{
        const response = await tblog.save();
        res.json(response);
    } catch(err){
        res.json(err);
    }
})
router.post('/yourblogs', async (req, res) => {
    const userOwner = req.body.userOwner;
    try {
      const response = await TblogModel.find({ userOwner: userOwner });
      res.json(response);
    } catch (err) {
      res.json(err);
    }
  });
export {router as tblogRouter};

