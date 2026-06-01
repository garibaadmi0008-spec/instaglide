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

        const options = {
            method: 'GET',
            url: 'https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com/index',
            params: {
                url: reelUrl
            },
            headers: {
                'X-RapidAPI-Key': 'PASTE_YOUR_API_KEY',
                'X-RapidAPI-Host': 'instagram-downloader-download-instagram-videos-stories.p.rapidapi.com'
            }
        };

        const response = await axios.request(options);

        res.json(response.data);

    } catch (error) {

        res.json({
            success: false,
            message: "Error fetching reel"
        });

    }

});

app.listen(3000, () => {
    console.log("Server Running");
});
