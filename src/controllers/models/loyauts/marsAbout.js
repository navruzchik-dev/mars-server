// module.exports = {
//     layoutName: "mars-about",
//     layoutObject: {
//       title: "Biz haqimizda",
//       description: "Mars IT ta'lim markazi — IT mutaxassislarni tayyorlovchi markaz.",
//       mission: "Har bir bolaga texnologiya dunyosida o'z o'rnini topish imkonini yaratish",
//       values: ["Innovatsiya", "Ta'limga kirish imkoniyati", "Kelajakka ishonch"],
//       image: "/path-to-your-image/about-us.png"
//     }
//   };
  
const mongoose = require('mongoose');

const marsAboutSchema = new mongoose.Schema({
  title: {
    type: String, 
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  mission: {
    type: String,
    required: true,
  },
  values: {
    type: [String],
    required: true,
  },
  image: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('MarsAbout', marsAboutSchema);
