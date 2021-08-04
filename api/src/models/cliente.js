const mongoose = "mongoose";
const Schema = mongoose.Schema;

const cliente = new Schema({
  nome: {
    type: String,
    required: [true, "Nome é obrigatório"],
  },
  telefone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    dafult: null,
  },
  foto: {
    type: String,
    dafult: null,
  },
  dataNascimento: {
    type: String,
    required: true,
  },
  sexo: {
    type: String,
    enum: ["M", "F"],
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["A", "I"],
    default: "A",
  },
  documento: {
    tipo: {
      type: String,
      enum: ['individual', 'corporation'],
      required: true,
    },
    numero: {
      type: String,
      required: true,
    },
  },
  endereco: {
    cidade: String,
    uf: String,
    cep: String,
    numero: String,
    pais: String,
    rua: String,
  },
  dataCadastro: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Cliente", cliente);
