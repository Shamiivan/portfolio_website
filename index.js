const   express     = require("express"),
        app         = express(),
        path        = require("path"),
        router      = express.Router();
    
router.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));   
});


app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/sass'));

app.listen(process.env.PORT, process.env.IP,()=>{
   console.log("SERVER RUNNING"); 
});