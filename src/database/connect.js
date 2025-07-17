const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejsdicasparadev.sowlphp.mongodb.net/?retryWrites=true&w=majority&appName=CursoNodeJsDicasParaDevs`
    );
    console.log("Conexão bem sucedida!");
  } catch (error) {
    console.log("Erro ao conectar-se com o banco de dados:", error);
  }
};

module.exports = connectToDatabase;
