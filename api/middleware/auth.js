const auth = (req,res,next) => {
    if(!req.auth) return res.status(401).json({success:false,message:"Unauthorized!"});
    next();
};

module.exports = {auth};
