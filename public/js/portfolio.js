var Site = angular.module('Site', ['ngModal']);
Site.config(function(ngModalDefaultsProvider) {
    return ngModalDefaultsProvider.set({
      closeButtonHtml: "<i class='fa fa-times'></i>"
    });
});

Site.controller('MyCtrl', function($scope) {
          $scope.myData = {
            link: "http://google.com",
            hello: 'world',
            foo: 'bar',
            modalShown: false
          }

          $scope.currentModalIndex = 1;
          $scope.imageMapping = {
            1: "wienbridgelampphoto.jpg",
            2: "wienbridgewolampphoto.jpg",
            3: "deadbugphotosoft.jpg",
            4: "afterspace_ipad.png",
            5: "arxgraph.png",
            6: "schoen.png"
          };


          $scope.logClose = function() {
            console.log('close!');
          };

          /* replaced with setModal
          $scope.toggleModal = function() {
            $scope.myData.modalShown = !$scope.myData.modalShown;
          };
          */

          $scope.setModal = function(i) { //toggleModal

            var scrollPos = document.body.scrollTop;
            console.log(scrollPos);

            $scope.myData.modalShown = !$scope.myData.modalShown;

            $scope.currentModalIndex = i;
            console.log('confirm currentModalIndex set to ' + $scope.currentModalIndex);
            
          };

          $scope.returnModalURI = function() {
            console.log($scope.imageMapping[$scope.currentModalIndex]);
            return $scope.imageMapping[$scope.currentModalIndex];
            //console.log('showing ' + i);
            //return i == $scope.showMe;
          };

});