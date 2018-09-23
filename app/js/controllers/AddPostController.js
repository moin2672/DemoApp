"use strict";

 postsApp.controller("AddPostController", 
     function AddPostController($scope, postData, $location) {
        $scope.savePost=function(post, newPostForm){
            //console.log(newPostForm);
            if(newPostForm.$valid){
                //window.alert(post.Title + '... Saved.!!!!');
                postData.save(post)
                .$promise
                .then(function(response){
                    console.log('success',response);
                    $location.path( "/posts" );
                })
                .catch(function(response){console.log('failure',response)});
            }
        };		        

         $scope.cancel=function(){
             //console.log("cancel clicked");
            window.location="/PostList.html";
         }
     }
 );