const express = require("express");
const {default:axios} = require("axios");

const router = express.Router();

router.get("/search",async(req,res) => {
    let {q} = req.query;

    let {data} = await axios.get(`https://animeapi.skin/search?q=${q}&page=1`);
    if(!data) return res.status(400).json({success:false,message:'Not found!'});

    res.json({success:true,data});
});

router.get("/:id",async(req,res) => {
    let {id} = req.params;

    let {data:episodes} = await axios.get(`https://animeapi.skin/episodes?title=${id}`);
    if(!episodes) return res.status(400).json({success:false,message:"Not found!"});

    episodes.reverse();

    res.json({success:true,episodes});
});

module.exports = router;
