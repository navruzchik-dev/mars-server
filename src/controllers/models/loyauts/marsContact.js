// module.exports = {
//     layoutName: "mars-contact",
//     layoutObject: {
//       title: "Biz bilan bog'laning",
//       description: "Savollaringiz bormi? Biz bilan bog'laning va biz sizga yordam berishga tayyormiz!",
//       phone: "+998 78 777 77 57",
//       email: "info@marsit.uz",
//       address: "Toshkent shahri, Nukus ko'chasi, 45-uy",
//       mapLink: "https://www.google.com/maps/place/Tashkent",
//       socialLinks: {
//         facebook: "https://www.facebook.com/marsit",
//         instagram: "https://www.instagram.com/marsit",
//         telegram: "https://t.me/marsit"
//       },
//       image: "/path-to-your-image/contact.png"
//     }
//   };
const mongoose = require('mongoose');

const marsContactSchema = new mongoose.Schema({
  title: {
    type: String, 
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  mapLink: {
    type: String,
    required: true,
  },
  socialLinks: {
    facebook: {
      type: String,
    },
    instagram: {
      type: String,
    },
    telegram: {
      type: String,
    }
  },
  image: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('MarsContact', marsContactSchema);

