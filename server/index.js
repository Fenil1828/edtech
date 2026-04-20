// Load environment variables FIRST
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.join(__dirname, ".env") });

const express = require("express");
const app = express();

const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

// Routes
const userRoutes = require("./routes/User");
const profileRoutes = require("./routes/Profile");
const paymentRoutes = require("./routes/Payment");
const courseRoutes = require("./routes/Course");
const chatRoutes = require("./routes/Chat");
const contactUsRoute = require("./routes/Contact");

// DB + Cloudinary
const database = require("./config/database");
const { cloudinaryConnect } = require("./config/cloudinary");

const PORT = process.env.PORT || 4000;

/* ================= MIDDLEWARE ================= */

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cookieParser());

app.use(
  cors({
    origin: [process.env.CLIENT_URL, "http://localhost:3000", "https://study-notion-f1-silk.vercel.app"],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
    limits: { fileSize: 50 * 1024 * 1024 }, // 50MB file size limit
  })
);

/* ================= INIT SERVICES ================= */

database.dbconnect();
cloudinaryConnect();

/* ================= API ROUTES ================= */

app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/reach", contactUsRoute);
app.use("/api/v1/chat", chatRoutes);

/* ================= ROOT TEST ================= */

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend is Running 🚀",
  });
});

/* ================= IMPORTANT: NO BUILD STATIC SERVING ================= */
/*
   ❌ DO NOT add:
   app.use(express.static("build"))
   app.get("*") sending index.html

   Because frontend is deployed separately on Vercel
*/

/* ================= START SERVER ================= */

app.listen(PORT, () => {
  console.log(`App is Running At ${PORT}`);
});