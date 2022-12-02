import app from "../src/index.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = 3000 //process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});