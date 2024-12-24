// module.exports = {
//     layoutName: "mars-courses",
//     layoutObject: {
//       title: "Kurslarimiz",
//       description: "Bizning kurslarimiz o'quvchilarga texnologiya olamiga eshik ochadi.",
//       courses: [
//         {
//           name: "Frontend Dasturlash",
//           duration: "3 oy",
//           level: "Boshlang'ich"
//         },
//         {
//           name: "Backend Dasturlash",
//           duration: "4 oy",
//           level: "O'rta"
//         },
//         {
//           name: "Fullstack Dasturlash",
//           duration: "6 oy",
//           level: "Keng qamrovli"
//         }
//       ],
//       image: "/path-to-your-image/courses.png"
//     }
//   };
  const mongoose = require('mongoose');

const marsCoursesSchema = new mongoose.Schema({
  title: {
    type: String, 
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  courses: [{
    name: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
    }
  }],
  image: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('MarsCourses', marsCoursesSchema);
