let User=require("../models/User");
let Util=require("../helpers/util");
module.exports.controllers=(app)=>{
    app.get("/test",(req,res)=>{



        try{
            var name=Util.parseRequest(req.param("name"),"name",true);
        }catch (err){
            res.send(err);
        }
        res.send(User.getName(name));
    });
};
