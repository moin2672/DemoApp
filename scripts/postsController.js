
 var fs=require('fs');
 
  module.exports.get= function(req, res){
    //console.log("exports.get");
      var event=fs.readFileSync('app/data/post/'+req.params.id+'.json','utf8');
      res.setHeader('Content-Type','application/json');
     
      res.send(event);
  };
 
  module.exports.save=function(req,res){
      //console.log("exports.save");
      var event=req.body;
    // console.log("id="+req.params.id);
     // console.log("inside controller="+req.body.emailID);
      fs.writeFileSync('app/data/post/'+req.params.id+'.json', JSON.stringify(event));
      res.send(event);
  };