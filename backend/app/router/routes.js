"use strict";

module.exports = function (app) {
  const book = require("../controller/bookController");
  const router = require("express").Router();

  const multer = require("multer");
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./assets");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });

  const upload = multer({ storage: storage });

  router.get("/findAll", book.findAll);

  router.get("/findOne/:id", book.findOne);

  router.post("/create", upload.single("imageBook"), book.create);

  router.put("/update/:id", book.update);

  router.delete("/delete/:id", book.delete);

  app.use("/api/book", router);
};
