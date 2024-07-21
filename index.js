import express from "express";
import bodyParser from "body-parser";
import qr from "qr-image";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/URL", (req, res) => {
    const getUrl = req.body.url;
    const qr_svg = qr.imageSync(getUrl, { type: 'png' });
    const image_url = 'data:image/png;base64,' + qr_svg.toString('base64');

    res.render("index.ejs", { image: image_url, url: getUrl });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});