// app.ts
import cors from "cors";
import express from "express";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    const a = 10;
    res.send(a);
});

export default app;
