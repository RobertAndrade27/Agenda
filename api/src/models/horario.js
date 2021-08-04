const mongoose = "mongoose";
const Schema = mongoose.Schema;

const horario = new Schema({
  salaoId: {
    type: mongoose.Types.ObjectId,
    ref: "Salao",
    required: true,
  },
  especialidades: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Servico",
      required: true,
    },
  ],
  colaboradores: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Colaborador",
      required: true,
    },
  ],
  dias: {
    type: [Number],
    required: true,
  },
  inicio: {
    type: Date,
    required: true,
  },
  fim: {
    type: Date,
    required: true,
  },
});

salao.index({
  geo: "2dsphere",
});

module.exports = mongoose.model("Horario", horario);
