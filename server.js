```javascript
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("Backend Running Successfully");
});

app.get("/download", (req, res) => {

    const reelUrl = req.query.url;

    if (!reelUrl) {
        return res.json({
            success: false,
            message: "No URL Provided"
        });
    }

    res.json({
        success: true,
        video: reelUrl
    });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```
