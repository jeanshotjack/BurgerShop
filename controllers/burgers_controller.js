var express = require("express");

var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var handle = {
            burgs: data
        }
        console.log(handle);
        res.render("index", handle);
    });
});

router.post("/api/burgs", function (req, res) {
    burger.insertOne([
        "burgname", "devour"
    ], [
            req.body.burgname, req.body.devour
        ], function (result) {

            res.json({ id: result.insertId });
        });
});

router.put("/api/burgs/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devour: req.body.devour
    },
        condition, function (result) {
            if (result.changedRows == 0) {

                return res.status(404).end();
            } 
            else {
                res.status(200).end();
            }
        });
});
module.exports = router;