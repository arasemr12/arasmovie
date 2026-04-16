require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const {default:axios} = require("axios");
const { auth } = require("./middleware/auth");
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use((req,res,next) => {
    let authorization = req.headers.authorization;
    if(authorization == process.env.SECRET) req.auth = true;
    next();
});

app.use(cors({
    credentials:false,
    origin:"*"
}));

app.use(morgan("dev"));

//const anime = require("./routes/anime");

//app.use("/api/anime",anime);

app.post("/api/auth",async(req,res) => {
    const {secret} = req.body;

    if(secret != process.env.SECRET) return res.json({success:false});
    res.json({success:true});
});

app.get("/api/search",auth,async(req,res) => {
    let {q} = req.query;

    let {data:result} = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.TMDB_API_KEY}&query=${q}`);

    result.results = result.results.filter((e) => e.media_type == "tv" || e.media_type == "movie");
    result.results.sort((a,b) => b.popularity-a.popularity);

    res.json({success:true,data:result});
});

app.get('/api/movie/:id',auth,async(req,res) => {
    const {id} = req.params;

    let {data:result} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}`);

    res.json({success:true,data:{result,iframeURL:`https://vidsrcme.ru/embed/movie?tmdb=${result.id}`}});
});

app.get('/api/tv/:id',auth,async(req,res) => {
    const {id} = req.params;

    let {data:result} = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.TMDB_API_KEY}`);
    let {data:external_ids} = await axios.get(`https://api.themoviedb.org/3/tv/${id}/external_ids?api_key=${process.env.TMDB_API_KEY}`);

    res.json({success:true,data:{result,external_ids,iframeURL:`https://vidsrcme.ru/embed/tv?tmdb=${result.id}`}});
});

app.listen(process.env.PORT || 5001,() => console.log("app listening"));
