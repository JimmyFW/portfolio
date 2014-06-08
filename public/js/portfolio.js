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
            1: "public/imgs/wienbridgelampphoto.jpg",
            2: "public/imgs/wienbridgewolampphoto.jpg",
            3: "public/imgs/deadbugphotosoft.jpg",
            4: "public/imgs/afterspace_ipad.png",
            5: "public/imgs/arxgraph.png",
            6: "public/imgs/schoen.png"
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