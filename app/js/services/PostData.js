'use strict';

postsApp.factory("postData", function($resource){
    var resource=$resource('/data/post/:id',{id:'@id'});
    return {
        getPost:function(){
            //console.log("getting data");
            return resource.get({id:1});
        },
        save: function(post){
            //console.log("saving data");
            post.id=998;
           // console.log("inside="+post.id);
            return resource.save(post);
        }
    };
});

