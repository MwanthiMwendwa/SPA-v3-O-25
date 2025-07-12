const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});


app.get('/api/profile', (req, res) => {
    res.status(200).json({
        "name": "Mwendwa Mwanthi",
        "Position": "Founder",
        "contact": "0720-211-391"
    })
})

app.listen(process.env.PORT || 7070, () => console.log(`Server running...7070`));
