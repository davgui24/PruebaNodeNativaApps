const PORT_SERVER = process.env.PORT || 3500;
const mongoose = require('mongoose');





var db = function() {
  mongoose.connect('mongodb://localhost:27017/OMDb-Movies', {useNewUrlParser: true, useUnifiedTopology: true}, (err, res) => {
      if (err) throw err;
      console.log('Data Base: \x1b[32m%s\x1b[0m', 'ONLINE');
  });
}


module.exports = { PORT_SERVER, db };
