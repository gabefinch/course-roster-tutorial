courseRoster.factory('CoursesFactory',
  function CoursesFactory() {
  var factory = {};
  factory.courses = [];
  factory.addCourse = function() {
    factory.courses.push({ name: factorry.courseName
                          id: factory.corses.length + 1
                          students: []
                        });
    factory.courseName = null;
  };

  return factory;
});
