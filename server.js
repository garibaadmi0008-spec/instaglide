```javascript
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("Instagram Downloader Backend Running");
});

app.get("/download", async (req, res) => {

    const reelUrl = req.query.url;

    if (!reelUrl) {
        return res.json({
            success: false,
            message: "No URL Provided"
        });
    }

    try {

        const response = await axios.get(
            `https://api.codetabs.com/v1/proxy/?quest=${encodeURIComponent(reelUrl)}`
        );

        res.json({
            success: true,
            data: response.data
        });

    } catch (error) {

        res.json({
            success: false,
            message: error.message
        });

    }

});

app.listen(3000, () => {
    console.log("Server Running");
});
```
