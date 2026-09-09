const isAuthoeized = (req, res, next) => {
     let token = req.headers.cookie;

     if((!token) && (token!=123987)){
        return res.status(401).send("kon hai bhai tu authorized nhi hai")

     }
     next();

}

const isloggedIn = ((req,res,next) => {
    let login = true;
    
    if(!login){
        return res.status(401).send("login kro bhai")
    }
    next();
})
module.exports = {isAuthoeized, isloggedIn}