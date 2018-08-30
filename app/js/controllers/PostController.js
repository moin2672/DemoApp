'use strict';

 postsApp.controller('PostController',
     function PostController($scope, postData){
         $scope.sortOrder="views";
         //$scope.post=postData.post;
         postData.getPost()
                .success(function(post){$scope.post=post;})
                .error(function(data,status,headers,config){
                     $log.warn(data,status,headers(),config);
                 });

         $scope.getImg = function(s){
            var start=-1, end=-1;
            for(var i=0;i<s.length;i++){
              if(s.charAt(i)==="<" && s.charAt(i+1)==="i" && 
              s.charAt(i+2)==="m" && s.charAt(i+3)==="g"){
                console.log(s.charAt(i));
                console.log(i);
                start=i;
                //window.alert(i);
                
                for(var j=i;j<s.length;j++){
                  if(s.charAt(j)==="/" && s.charAt(j+1)==='>'){
                     console.log(s.charAt(j));
                    console.log(j);
                    end=j+2;
                    break;
                  }
                }
                
                if(start!=-1 && end!=-1){
                 return s.substring(start,end);
                }
                
                return "";
              }
            }
        }
        $scope.getPara = function(s){
            var start=-1, end=-1;
            for(var i=0;i<s.length;i++){
              if(s.charAt(i)==="<" && s.charAt(i+1)==="p" && 
              s.charAt(i+2)===">" && s.charAt(i+3)!=="<"){
                console.log(s.charAt(i));
                console.log(i);
                start=i;
                //window.alert(i);
                
                for(var j=i+3;j<s.length;j++){
                  if(s.charAt(j)==="<" && s.charAt(j+1)==='/' && s.charAt(j+2)==='p' && s.charAt(j+3)==='>'){
                     console.log(s.charAt(j+1));
                    console.log(j);
                    end=j+4;
                    break;
                  }
                }
                if(start!=-1 && end!=-1){
                    return s.substring(start,end);
                    break;    
                }
                return "";
              }
            }
        }
    }
); 