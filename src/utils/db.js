const mongoose = require('mongoose');

async function connectDB(url) {
  mongoose.set('strictQuery', false);
  await mongoose.connect(url, {}, );
}
const onSuccessCon = mongoose.connection
onSuccessCon.once('open',()=>{
  console.log('DB Connected')
})
async function disconnectDB() {
  mongoose.set('strictQuery', false);
  await mongoose.disconnect();
}
module.exports = {
  connectDB,
};