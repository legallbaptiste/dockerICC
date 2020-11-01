import express from "express";
import { Client } from "pg";

const PORT = process.env.PORT || 3000;

const client = new Client({
  password: "postgres",
  user: "postgres",
  host: "postgres",
});

const app = express();

app.get("/checkDB", async (req, res) => {
  const database = await client.query("SELECT 1+1").then(() => "La connexion est bien faites avec la BDD").catch(() => "Problème de connexion avec la BDD");

  res.send({
    environment: process.env.NODE_ENV,
    database,
  });
});


app.get("/", async(req,res) => {
  res.send("<h1>C'est bon ça marche !</h1> <br>Pour pouvoir tester la connexion avec la BDD, il faut accèder à http://localhost:3000/checkDB <br> La connexion de la DB sera marqué sur la page");
});

(async () => {
  await client.connect();

  app.listen(PORT, () => {
    console.log("Serveur ouvert :  http://localhost:%d", PORT);
  });
})();
