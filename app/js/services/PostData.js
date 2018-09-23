'use strict';

postsApp.factory("postData", function($resource){
    var resource=$resource('/data/post/:id',{id:'@id'},
    {"getAll": {method: "GET", isArray: true, params: {something: "foo"}}});
    return {
        getPost:function(postId){
            //console.log("getting data");
            return resource.get({id:postId});
        },
        save: function(post){
            //console.log("saving data");
            //console.log(resource.getNextId());
            post.id=997;
           // console.log("inside="+post.id);
            return resource.save(post);
        },
        getAllPosts: function(){
            console.log('inside fn starts');
            return resource.query();
            console.log(resource.query());
            console.log('inside fn ends');
        }		         
    };
});

