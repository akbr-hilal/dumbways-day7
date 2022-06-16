const express = require("express");
const app = express();
const port = 8080;

app.set("view engine", "hbs"); //Set hbs
app.use("/assets", express.static(__dirname + "/assets"));
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
    res.render("index");
});

app.get("/add-project", function (req, res) {
    res.render("add-project");
});

app.post("/add-project", function (req, res) {
    console.log(req.body);
});

app.get("/project-detail/:name", function (req, res) {
    let name = req.params.name;
    res.render("project-detail", {
        project: {
            name,
            title: "Judul Project",
            duration: "29 Januari 2022 - 5 Februari 2022",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown",
        },
    });
});

app.get("/contact", function (req, res) {
    res.render("contact");
});

app.listen(port, function (req, res) {
    console.log(`Server berjalan di port ${port}`);
});
