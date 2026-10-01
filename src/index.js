import express from "express";
import "dotenv/config";
import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

import authRoutes from "./routes/authRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";

import { connectDB } from "./lib/db.js";

const app = express();
const PORT = process.env.PORT || 5000;

// app.use((req, res, next) => {
//   console.log("METHOD:", req.method);
//   console.log("URL:", req.url);
//   console.log("CONTENT-TYPE:", req.headers["content-type"]);
//   next();
// });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
  connectDB();
});
