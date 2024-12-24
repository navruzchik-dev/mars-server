// module.exports = {
//   layoutName: "mars-header",
//   layoutObject: {
//     title: "Farzandingizni o'yinlardan chalg'itib, unga IT mutaxassisi bo'lish imkoniyatini bering",
//     description: "12 yoshdan 18 yoshgacha bo'lgan bolalar uchun komputer kurslari",
//     tags: ["#fullstack", "#dasturlash", "#frontend", "#backend"],
//     buttonText: "SINOV DARSIGA YOZILISH UCHUN SHOSHILING",
//     image: "/path-to-your-image/child-vr.png",
//     statistics: "Hozirda «Mars IT»da 1,800 dan ortiq o'quvchi ta'lim olmoqda",
//     phone: "+998 78 777 77 57",
//     workingHours: "Har kuni soat 9:00 dan 20:00 gacha",
//     languages: ["RU", "UZ"]
//   }
// };
const mongoose = require('mongoose');

const marsHeaderSchema = new mongoose.Schema({
  title: {
    type: String, 
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  buttonText: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  statistics: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  workingHours: {
    type: String,
    required: true,
  },
  languages: {
    type: [String],
    required: true,
  }
});

module.exports = mongoose.model('MarsHeader', marsHeaderSchema);
