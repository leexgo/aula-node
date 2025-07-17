const path = require("path");

//Apenas o nome do arquivo atual
console.log("nome do arquivo::", path.basename(__filename));

//Nome do diretório atual
console.log("nome do diretório::", path.dirname(__filename));

// Extensão do arquivo
console.log("extensão do arquivo::", path.extname(__filename));

// Criar objeto path
console.log("objeto path::", path.parse(__filename));

// JUntar caminhos de arquivos
console.log(
  "juntar caminhos de aquivos::",
  path.join(__dirname, "teste", "addmaisum")
);
