'use strict';

var postsApp = angular
                .module('postsApp', ['ngSanitize','textAngular','ngResource','ngRoute'])
                .config(function($routeProvider, $locationProvider){
                    $routeProvider.when('/addPost',{
                        templateUrl: 'templates/AddPost.html',
                        controller: 'AddPostController'
                    });
                   $routeProvider.when('/posts',
                    {
                        templateUrl:'templates/PostList.html',
                        controller: 'PostListController'
                    });
                    $routeProvider.when('/post/:postId',
                    {
                        templateUrl:'templates/PostDetails.html',
                        controller: 'PostController',
                        resolve:{
                            post: function($route, postData){
                              return postData.getPost($route.current.pathParams.postId).$promise;
                            }
                        }
                    });
                    $routeProvider.otherwise({redirectTo:'/posts'});
                    $locationProvider.html5Mode(true);
                });
