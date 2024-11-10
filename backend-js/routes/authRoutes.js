const express = require("express");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router();


router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (user) {
            const passwordMatch = await bcrypt.compare(password, user.password); // Compare the passwords

            if (passwordMatch) {
                const token = jwt.sign(
                    {
                        email: user.email,
                        isStudent: user.isStudent,
                        isAdmin: user.isAdmin,
                        firstLogin: user.firstLogin,
                        matricule: user.matricule,
                    },
                    "MySuperSecretStrongKey0123456789"
                );

                res.status(200).json({ message: "Login successful", token });
            } else {
                res.status(401).json({ message: "Invalid credentials" });
            }
        } else {
            // User not found
            res.status(404).json({ message: "Invalid Email" });
        }
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

