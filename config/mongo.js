const mongoose = require("mongoose");
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () =>
  console.log(`yay mongodb connected :) http://127.0.0.1:${PORT}`)
);

mongoose.connection.on("error", () =>
  console.log("nay db connection error :(")
);
