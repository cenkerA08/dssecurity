const express = require("express");
const fetch = require("node-fetch");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.post("/submitForm", async (req, res) => {
    try {
        const response = await fetch("https://public.herotofu.com/v1/5d776d00-f8de-11ee-bf9d-5f9a26e8739d", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(req.body),
        });

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Error submitting form data:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
