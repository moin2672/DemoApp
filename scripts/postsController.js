
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
     var path='app/data/post/';
     
         var files =[];
     
         try{
             files=fs.readdirSync(path);
         }
         catch(e){
             res.send('[]');
             res.end();
         }

         var fileno=files.length+1;
         //req.params.id=fileno;
         console.log(req.body);
         req.body.id=fileno;
         console.log(req.body);
     // fs.writeFileSync('app/data/post/'+req.params.id+'.json', JSON.stringify(event));
     fs.writeFileSync('app/data/post/'+fileno+'.json', JSON.stringify(event));
      res.send(event);
  };

  module.exports.getNextId = function(req, res){
    var path='app/data/post/';

    var files =[];

    try{
        files=fs.readdirSync(path);
    }
    catch(e){
        res.send('[]');
        res.end();
    }

    var a=files.length+1;

    //res.setHeader('Content-Type','application/json');
    res.send(a);
    res.end();
};
  module.exports.getAll =function(req, res){
    var path='app/data/post/';

    var files =[];

    try{
        files=fs.readdirSync(path);
    }
    catch(e){
        res.send('[]');
        res.end();
    }

    var results ="[";

    for (var idx=0; idx<files.length;idx++){
        if(files[idx].indexOf(".json") == files[idx].length-5){
            results+=fs.readFileSync(path+"/"+files[idx])+",";
        }
    }

    results = results.substr(0, results.length-1);
    results+="]";

    res.setHeader('Content-Type','application/json');
    res.send(results);
    res.end();
};