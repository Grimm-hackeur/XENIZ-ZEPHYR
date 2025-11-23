const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Pour lire JSON
app.use(express.json());

// Pour le frontend
app.use(express.static(path.join(__dirname, "../frontend")));

// ROUTES API
app.use("/api/tools", require("./routes/tools"));
app.use("/api/panels", require("./routes/panels"));
app.use("/api/contact", require("./routes/contact"));

// Route wildcard → renvoyer index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// Lancer serveur
app.listen(PORT, () => console.log("Server running on port " + PORT));
