"use strict";

const response = require("../config/response");
const connection = require("../config/database");

// GetAll book
exports.findAll = function (req, res) {
  connection.query(`SELECT * FROM buku`, function (err, result, fields) {
    if (err) {
      console.log(err);
    } else {
      response.ok(result, res);
    }
  });
};

// GetOne book
exports.findOne = function (req, res) {
  let id = req.params.id;
  connection.query(
    `SELECT * FROM buku WHERE id = ${id}`,
    function (err, result, fields) {
      if (err) {
        console.log(err);
      } else {
        response.ok(result, res);
      }
    }
  );
};

// Create book
exports.create = function (req, res) {
  const judul = req.body.judul;
  const deskripsi = req.body.deskripsi;
  const penulis = req.body.penulis;
  const imageBook = req.file.path;

  connection.query(
    "INSERT INTO buku (judul, deskripsi, penulis, imageBook) VALUES (?,?,?,?)",
    [judul, deskripsi, penulis, imageBook],
    function (err, result, fields) {
      if (err) {
        console.log(err);
      } else {
        // console.log(result, fields);
        response.ok("Berhasil melakukan create buku", res);
      }
    }
  );
};

// Update book
exports.update = function (req, res) {
  const id = req.params.id;
  const judul = req.body.judul;
  const deskripsi = req.body.deskripsi;
  const penulis = req.body.penulis;
  // const imageBook = req.file.filename;

  connection.query(
    `UPDATE buku SET judul=?, deskripsi=?, penulis=? WHERE id=?`,
    [judul, deskripsi, penulis, id],
    function (err, result, fields) {
      if (err) {
        console.log(err);
      } else {
        response.ok("Berhasil melakukan update data", res);
      }
    }
  );
};

// delete book
exports.delete = function (req, res) {
  const id = req.params.id;

  connection.query(
    `DELETE FROM buku WHERE id=?`,
    [id],
    function (err, result, fields) {
      if (err) {
        console.log(err);
      } else {
        response.ok("Berhasil melakukan delete data", res);
      }
    }
  );
};
