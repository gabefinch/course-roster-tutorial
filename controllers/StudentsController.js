courseRoster.controller('StudentsCtrl', function StudentsCtrl(
  $scope, $stateParams, CoursesFactory, UtilitiesFactory
  ) {

  $scope.course = UtilitiesFactory.findById(
    CoursesFactory.courses, $stateParams.courseId);
    
  $scope.addStudent = function() {
    $scope.curse.students.push({ name: $scope.studentName});
    $scope.studentName = null;
  }

});
