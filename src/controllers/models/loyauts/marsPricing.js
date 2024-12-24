// module.exports = {
//     layoutName: "mars-pricing",
//     layoutObject: {
//       title: "Narxlar",
//       description: "Bizning kurslarimizning narxlari va to'lov shartlari.",
//       pricingOptions: [
//         { course: "Frontend Dasturlash", price: "2,000,000 UZS", duration: "3 oy" },
//         { course: "Backend Dasturlash", price: "3,000,000 UZS", duration: "4 oy" },
//         { course: "Fullstack Dasturlash", price: "5,000,000 UZS", duration: "6 oy" }
//       ],
//       paymentMethods: ["Naqd", "Plastik karta", "Bank o'tkazmasi"],
//       image: "/path-to-your-image/pricing.png"
//     }
//   };
const mongoose = require('mongoose');

const marsPricingSchema = new mongoose.Schema({
  title: {
    type: String, 
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  pricingOptions: [{
    course: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    }
  }],
  paymentMethods: {
    type: [String],
    required: true,
  },
  image: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('MarsPricing', marsPricingSchema);
