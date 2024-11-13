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

// Get all Books
app.get("/", async (req, res) => {
  const getAllBooks = await BookModel.find();
  return res.json(getAllBooks);
});

// get book by id
app.get("/is/:isbn", async (req, res) => {
  const getSpecificBook = await BookModel.findOne({ ISBN: req.params.isbn });

  //null !0 = 1 , !1=0
  if (!getSpecificBook) {
    return res.json({
      error: `No book found for the ISBN of ${req.params.isbn}`,
    });
  }

  return res.json({ book: getSpecificBook });
});

// get book by category
app.get("/c/:category", async (req, res) => {
  const getSpecificBook = await BookModel.findOne({
    category: req.params.category,
  });

  //null !0 = 1 , !1=0
  if (!getSpecificBook) {
    return res.json({
      error: `No book found for the category of ${req.params.category}`,
    });
  }

  return res.json({ book: getSpecificBook });
});
