postsApp.controller('wysiwygeditor', ['$scope', 'textAngularManager', 
    function wysiwygeditor($scope, textAngularManager) {
        $scope.version = textAngularManager.getVersion();
        $scope.versionNumber = $scope.version.substring(1);
        $scope.orightml = '<h2>Delete me &amp; add your content here <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4BHwg9hvhUGHiJLcVaLG7I02yi5dr61xWJFXYgr0RXXWHwUUj"/></h2>';
        $scope.htmlcontent = $scope.orightml;
        $scope.disabled = false;
        $scope.getData=function(){
            console.log($scope.htmlcontent);
        }
    }]
);