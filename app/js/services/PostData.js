'use strict';

postsApp.factory("postData", function($http,$log){
    return {
        getPost:function(successcb){
            return $http({method:'GET', url:'/data/post/1'});
        }
    };
});

