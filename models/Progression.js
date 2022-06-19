const mongoose = require("mongoose");

const ProgressionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  criteria: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Progression", ProgressionSchema);
