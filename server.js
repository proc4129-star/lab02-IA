
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        status: "online",
        name: "LAB 02-IA",
        message: "Servidor funcionando"
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log("LAB 02-IA iniciado");
});
