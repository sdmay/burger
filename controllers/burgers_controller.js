var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/burgers/create", function (req, res) {
    var values = req.body.burger;
    burger.create([values
    ],
        function () {
            res.redirect("/burgers");
        });
});

router.put("/burgers/update/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    burger.update({ devoured: 1 },
        condition, function () {
            res.redirect("/burgers");
        });
});

router.delete("/burgers/delete", function (req, res) {
    burger.delete("devoured = 1")
    res.redirect("/burgers")
})

module.exports = router;