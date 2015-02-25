courseRoster.controller('CoursesCtrl',
function CourseCtrl($scope, CoursesFactory) {
  $scope.courses = CoursesFactory.courses;
  $scope.CoursesFactory = CoursesFactory;
});
