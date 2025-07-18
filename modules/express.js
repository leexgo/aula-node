const express = require("express");
const UserModel = require("../src/models/user.model");

const app = express();
const port = 8080;

app.use(express.json());
app.set("view engine", "ejs");
app.set("views", "src/views");

app.use((req, res, next) => {
  console.log("Request type:", req.method);
  console.log("Content type:", req.headers["content-type"]);
  console.log("Date:", new Date());

  next();
});

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.get("/views/users", async (req, res) => {
  const users = await UserModel.find({});
  res.render("index", { users });
});

app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndDelete(id);

    if (!user) {
      res.status(404).send("Usuário não encontrado");
    }
    return res.status(200).send("Usuário deletado");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => console.log(`Porta ${port} online!`));
