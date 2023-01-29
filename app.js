//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



app.get("/", function(req, res){
  res.render("home");
});

app.get("/CP", function(req, res){
  res.render("calculate2i", {
    title: "Permütasyon ve Kombinasyon Hesaplama",
    cpimg: "Cp.png",
    first: "P(n,r)  |  C(n,r)",
    second: "",
    third: "",
    btncls: "buttonC-P",

    ph1: "n",
    ph2: "r"
  });
});

app.get("/DortgendeUzunluk", function(req, res){
  res.render("calculate2i", {
    title: "Dörtgende Uzunluk Hesaplama",
    cpimg: "DortgendeUzunluk.png",
    first: "a² + c² = b² + d²",
    second: "",
    third: "",
    btncls: "buttonD-L",

    ph1: "a",
    ph2: "c"
  });
});


app.get("/PolygonAngle", function(req, res){
  res.render("calculate1i", {
    title: "Düzgün Çokgen Açı Hesaplamaları",
    cpimg: "Cokgen.png",
    first: "İç Açıları Toplamı = (n-2) / 180°",
    second: "Bir İç Açısı = (n-2) * 180° / n",
    third: "Bir Dış Açısı = 360° / n",
    btncls: "buttonD-C",

    ph1: "n"
  });
});


app.get("/TetragonArea", function(req, res){


  res.render("calculate3i", {
    title: "Dörtgen Alanını Hesaplama",
    cpimg: "DortgeninAlanı.png",
    first: "Dörtgenin Alanı ",
    second: "",
    third: "",
    btncls: "buttonT-A",

    ph1: "e",
    ph2: "f",
    ph3: "α",

    inputtype: "number"
  });
});


app.get("/Trigonometry", function(req, res){
  res.render("calculate1i", {
    title: "Trigonometri Hesaplamaları",
    cpimg: "Trigonometry.png",
    first: "sin α=   , cos α= ",
    second: "tan α=   , cot α=",
    third: "",
    btncls: "buttonTrigonometry",

    ph1: "α",
  });
});


app.get("/TriangleArea", function(req, res){
  res.render("calculate3i", {
    title: "Dörtgen Alanını Hesaplama",
    cpimg: "UcgeninAlanı.png",
    first: "A(ABC) = [b * c * sin(a)] / 2",
    second: "",
    third: "",
    btncls: "buttonTriangleAlan",

    ph1: "b",
    ph2: "c",
    ph3: "α",

    inputtype: "number"
  });
});


app.get("/CosTeo", function(req, res){
  res.render("calculate3i", {
    title: "Cosinüs Teoremi Hesaplama",
    cpimg: "CosTeo.png",
    first: "a² = b² + c² -2b.c. cosα",
    second: "",
    third: "",
    btncls: "buttonCosTeo",

    ph1: "b",
    ph2: "c",
    ph3: "α",

    inputtype: "number"
  });
});


app.get("/EsasOlcu", function(req, res){
  res.render("calculate1i", {
    title: "Esas Ölçu Hesaplama",
    cpimg: "EsasOlcu.png",
    first: "α/360° kalanı esas ölçüdür. ",
    second: "",
    third: "",
    btncls: "buttonEsasOlcu",

    ph1: "α",

  });
});

// ½[(x₁.y₂ + x₂.y₃ + x₃ + y₁) - (x₂.y₁ + x₃.y₂ + x₁.y₃)]
app.get("/KordinatUcgeninAlani", function(req, res){
  res.render("calculate3i", {
    title: "Köşe Kordinatları verilen Üçgenin Alanını Hesaplama",
    cpimg: "KordinatUcgenAcı.png",
    first: "½[(...) - (...)]",
    second: "",
    third: "",
    btncls: "buttonKordinatUcgeninAlani",

    ph1: "x₁ , y₁",
    ph2: "x₂ , y₂",
    ph3: "x₃ , y₃",

    inputtype: "text"
  });
});

let port = process.env.PORT;
if(port == null || port == ""){
  port = 3000;
}

app.listen(port, function() {
  console.log("Server has started successfuly");
});
