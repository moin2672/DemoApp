"use strict";

 postsApp.controller("AddPostController", 
     function AddPostController($scope) {
        $scope.savePost=function(post, newPostForm){
            console.log(newPostForm);
            if(newPostForm.$valid){
                window.alert(post.Title + '... Saved.!!!!');
            }
        };		        

         $scope.cancel=function(){
             console.log("cancel clicked");
            window.location="/PostList.html";
         }
     }
 );