import express, { json } from "express";
const app = express();
const PORT = 8081;
app.use(json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is started and running",
  });
});

app.listen(PORT, () => {
  console.log("Server is running on post ${PORT}");
});
