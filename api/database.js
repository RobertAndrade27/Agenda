const mongoose = require("mongoose");

const URI = process.env.MONGO_SERVER_KEY;

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

mongoose
  .connect(URI)
  .then(() => console.log("Db is UP!"))
  .catch(() => console.log(err));
