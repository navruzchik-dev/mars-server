// module.exports = {
//     layoutName: "mars-news",
//     layoutObject: {
//       title: "Yangiliklar",
//       description: "Mars IT markazi haqida eng so'nggi yangiliklarni o'qing.",
//       news: [
//         { title: "Yangi kurslar boshlanadi!", date: "2024-12-01", link: "/news/new-courses" },
//         { title: "Mars ITda o'quvchi soni 2,000 ga yetdi!", date: "2024-11-20", link: "/news/student-count" },
//         { title: "Tegishli sertifikatlar bilan yangi kurslar!", date: "2024-10-15", link: "/news/certificate-courses" }
//       ],
//       image: "/path-to-your-image/news.png"
//     }
//   };
const mongoose = require('mongoose');

const marsNewsSchema = new mongoose.Schema({
  title: {
    type: String, 
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  news: [{
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    }
  }],
  image: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('MarsNews', marsNewsSchema);
