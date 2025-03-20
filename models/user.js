const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
    default: "Jacques Cousteau",
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
    default: "explorador",
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^((https?:)(\/\/\/?)([\w]*(?::[\w]*)?@)?([\d\w\.-]+)(?::(\d+))?)?([\/\\\w\.()-]*)?(?:([?][^#]*)?(#.*)?)*/.test(
          v
        );
      },
      message: (props) => `${props.value} is not a valid link!`,
    },
    default:
      "https://images.pexels.com/photos/8022977/pexels-photo-8022977.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});
module.exports = mongoose.model("user", userSchema);
