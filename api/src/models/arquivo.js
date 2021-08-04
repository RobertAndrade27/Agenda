const mongoose = require("mongoose") ;
const Schema = mongoose.Schema;

const arquivo = new Schema({
  referenciaId:{
    type: Schema.Types.ObjectId,
    refPath: 'model',
  },
  model:{
    type: String,
    required: true.valueOf,
    enum: ['Servico', 'Salao']
  },
  caminho: {
    type: String,
    required: true
  },
  dataCadastro: {
    type: Date,
    default: Data.now
  },
});

module.exports = mongoose.model("Arquivo", arquivo);
