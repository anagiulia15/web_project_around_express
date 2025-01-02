const mongoose = require('mongoose');

const cardsSchema = new mongoose.Schema({
  name:{
  type:String,
  required: true,
  minlength:2,
  maxlength:30,
  },
  link: {
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
  }, // name es un string
  owner:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  }, // cada usuario tiene un valor en name, por lo que es un campo obligatorio
  likes:{
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'user',
    required: true
  }, // la longitud mínima de name es de 2 caracteres
  createdAt: Number,
  // la longitud máxima es de 30 caracteres
});
module.exports = mongoose.model('card', cardsSchema);