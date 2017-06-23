var express=require('express') ;
var cors=require("cors");
var ejs=require('ejs');
var app=express();
app.use(cors());
app.use(express.static(__dirname+ '/public') )
app.set('view engine', 'ejs') ;
app.set('views',__dirname+'/views'); 
app.engine('html',ejs.renderFile); 
var router=express.Router();
router.get("/calculate",function(req,res){
    console.log('calculate the result.')
    var a=req.query.a;
    var b=req.query.b;
    res.status(200);
    res.send({result:parseInt(a)+parseInt(b)}) ;
})
app.get('/',function(res,res){
res.render('index.html');
}) 
app.get('/github-home',function(res,res){
res.render('templates/github-home.html');
})
app.use("/", router);
app.listen(1234,function(){
    console.log('listening at port 1234');
}) 