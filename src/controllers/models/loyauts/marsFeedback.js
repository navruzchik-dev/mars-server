// module.exports = {
//     layoutName: "mars-feedback",
//     layoutObject: {
//       title: "Fikrlar va Sharhlar",
//       description: "Bizning o'quvchilarimizning fikrlarini o'qing va Mars IT markazi haqida bilib oling.",
//       feedbacks: [
//         { name: "Ali", comment: "Mars ITda o'qish juda foydali bo'ldi. Endi men yaxshi ish topdim!" },
//         { name: "Laylo", comment: "Dasturlashni o'rganish juda oson va qiziqarli!" },
//         { name: "Jasur", comment: "Mars IT - bu haqiqatan ham yuqori sifatli ta'lim markazi." }
//       ],
//       image: "/path-to-your-image/feedback.png"
//     }
//   };
const mongoose = require('mongoose');

const marsFeedbackSchema = new mongoose.Schema({
  title: {
    type: String, 
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  feedbacks: [{
    name: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    }
  }],
  image: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('MarsFeedback', marsFeedbackSchema);
