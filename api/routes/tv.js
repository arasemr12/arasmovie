const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get('/:id',async(req,res) => {
    try {
        const {id} = req.params;

        let {data:result} = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.TMDB_API_KEY}`);
        let {data:external_ids} = await axios.get(`https://api.themoviedb.org/3/tv/${id}/external_ids?api_key=${process.env.TMDB_API_KEY}`);

        res.json({success:true,data:{result,external_ids,iframeURL:`https://vidsrcme.ru/embed/tv?tmdb=${result.id}`}});
    } catch (error) {
        res.status(500).json({success:false,message:"Internal server error"})
    }
});

module.exports = router;
