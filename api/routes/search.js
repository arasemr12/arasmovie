const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        let { q } = req.query;

        let { data: result } = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.TMDB_API_KEY}&query=${q}`);

        result.results = result.results.filter((e) => e.media_type == "tv" || e.media_type == "movie");
        result.results.sort((a, b) => b.popularity - a.popularity);

        res.json({ success: true, data: result });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" })
    }
});

module.exports = router;
