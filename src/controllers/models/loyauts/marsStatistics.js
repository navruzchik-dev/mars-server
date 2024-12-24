// module.exports = {
//     layoutName: "mars-statistics",
//     layoutObject: {
//       title: "Mars IT statistikasi",
//       description: "Bizning ta'lim markazimizda muvaffaqiyatlar, o'qish va o'qitish borasida yutuqlar.",
//       stats: [
//         { label: "O'quvchilar soni", value: "1,800+" },
//         { label: "Tayyorlangan mutaxassislar", value: "500+" },
//         { label: "O'qituvchilar", value: "50+" }
//       ],
//       image: "/path-to-your-image/statistics.png"
//     }
//   };
const mongoose = require('mongoose');

const marsStatisticsSchema = new mongoose.Schema({
  title: {
    type: String, 
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  stats: [{
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    }
  }],
  image: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('MarsStatistics', marsStatisticsSchema);
