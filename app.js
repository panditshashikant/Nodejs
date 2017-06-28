var express=require('express') ;
var cors=require("cors");
var ejs=require('ejs');
var app=express();
var topics= [{ID:1,name:'Git',title:'Git',links: [{ID:1,title:'introduction', url:'intro'},
    {ID:2,title:'Install git, create account on github and create repository.', url:'repository'},
    {ID:3,title:'Git Clone', url:'clone'},
    {ID:4,title:'Add files on staging and commit.', url:'commit'},
    {ID:5,title:'Pull Request', url:'pull'},
    {ID:6,title:'Push Request', url:'push'},
    // {ID:6,title:'Merge branch', url:'merge'},
    ]}];
app.use(cors());
app.use(express.static(__dirname+ '/public') )
app.set('view engine', 'ejs') ;
app.set('views',__dirname+'/views'); 
app.set('view cache', false);
//app.engine('html',ejs.renderFile); 
var router=express.Router();
router.get("/calculate",function(req,res){
    console.log('calculate the result.')
    var a=req.query.a;
    var b=req.query.b;
    res.status(200);
    res.send({result:parseInt(a)+parseInt(b)}) ;
})
app.get('/',function(res,res){
    console.log(topics);
res.render('index',{topic:'Training',topics:topics,topicContent:'home'});
}) 
app.get('/:topic',function(req,res,next){
console.log(req.params.topic) 
res.render('index',{topic:req.params.topic,topics,topicContent:'templates/git/home'});
})
app.get('/:topic/:url',function(req,res,next){
console.log(req.params.url) 

res.render('index',{topic:req.params.topic,topics,topicContent:'templates/'+req.params.topic+'/'+req.params.url});
})
app.use("/", router);
app.listen(1234,function(){
    console.log('listening at port 1234');
}) 