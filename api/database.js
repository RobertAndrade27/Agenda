const mongoose = require("mongoose");
const URI = "mongodb+srv://salaoUser:dVQyWVQWKZJFo6g1@cluster0.9rjug.mongodb.net/salao?retryWrites=true&w=majority"; 

// dVQyWVQWKZJFo6g1

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

mongoose
  .connect(URI)
  .then(() => console.log("Db is UP!"))
  .catch(() => console.log(err));
