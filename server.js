const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/download", async (req, res) => {

    const reelUrl = req.query.url;

    if (!reelUrl) {
        return res.json({
            success: false,
            message: "No URL provided"
        });
    }

    // Fake response for testing
    res.json({
        success: true,
        video: reelUrl
    });

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});