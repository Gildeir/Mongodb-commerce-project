db.produtos.updateMany({
  valoresNutricionais: {
     $elemMatch: {
      tipo: "sódio",
      percentual: {
        $gte: 40,
      },
    },
  },
}, {
  $push: {
    tags: "muito sódio",
  },
});

db.produtos.find({}, {
  _id: 0,
  nome: 1,
  tags: 1,
});

db.produtos.updateMany({
  valoresNutricionais: {
     $elemMatch: {
      tipo: "sódio",
      percentual: {
        $gt: 20,
      },
    },
  },
}, {
  $push: {
    tags: "contém sódio",
  },
});

db.produtos.find({}, {
  _id: 0,
  nome: 1,
  tags: 1,
});
