const express = require("express");
const app = express();
// definition du moteur d'affichage
app.set("view engine", "ejs");
app.set("views", "Pages");

app.get("/", (req, res) => {
  const heureConnectee = {
    lundi: {
      debut: "09:00",
      fin: "17:00",
    },
    mardi: {
      debut: "09:00",
      fin: "17:00",
    },
    mercredi: {
      debut: "09:00",
      fin: "17:00",
    },
    jeudi: {
      debut: "09:00",
      fin: "17:00",
    },
    vendredi: {
      debut: "09:00",
      fin: "17:00",
    },
  };

  res.status(200).render("Accueil", { heureConnectee: heureConnectee });
});
app.get("/Service", (req, res) => {
  res.status(200).render("Service");
});

app.get("/Contact", (req, res) => {
  res.status(200).render("Contact");
});
//ressource static
app.use(express.static("Public"));

app.listen(3001, "localhost", () => {
  console.log("mon appli est prete");
});
