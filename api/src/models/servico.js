const mongoose = require("mongoose") ;
const Schema = mongoose.Schema;

const servico = new Schema({
  salaoId: {
    type: mongoose.Types.ObjectId,
    ref: "Salao",
  },
  titulo: {
    type: String,
    require: true,
  },
  preco: {
    type: Number,
    require: true,
  },
  duracao: {
    type: Number,
    require: true,
  },
  comissao: {
    type: Number,
    require: true,
  },
  recorrencia: {
    type: Number,
    require: true,
  },
  descricao: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["A", "I", "E"],
    default: "A",
  },
  dataCadastro: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Servico", servico);
