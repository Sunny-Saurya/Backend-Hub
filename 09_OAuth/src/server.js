import express from "express";
import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.send("Server is running !!");
});

let oauthState;

app.get("/auth/google", (req, res) => {
    oauthState = crypto.randomBytes(32).toString("hex");

    const params = new URLSearchParams({
        client_id: process.env.GOOGLE_CLIENT_ID,
        redirect_uri: process.env.GOOGLE_REDIRECT_URI,
        response_type: "code",
        scope: "openid email profile",
        state: oauthState
    });

    const googleAuthUrl =
        `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;

    res.redirect(googleAuthUrl);
});

app.get("/auth/google/callback", (req, res) => {
    const { code, state: returnedState } = req.query;

    if (!code) {
        return res.status(400).send("Authorization code missing");
    }

    if (returnedState !== oauthState) {
        return res.status(400).send("Invalid state parameter");
    }

    return res.send(`Received code: ${code}`);
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});