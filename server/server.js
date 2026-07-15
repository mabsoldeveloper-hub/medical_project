
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

const app = require("./app");
const connectDB = require("./config/db");


const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  const server = app.listen(PORT, () => {
    console.log(`\n🚀 Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    console.log(`📡 API Base URL: http://localhost:${PORT}/api`);
    console.log(`🏥 Health Check: http://localhost:${PORT}/api/health\n`);
  });


  const gracefulShutdown = (signal) => {
    console.log(`\n⚠️  ${signal} received. Starting graceful shutdown...`);
    server.close(async () => {
      console.log("✅ HTTP server closed.");
      const mongoose = require("mongoose");
      await mongoose.connection.close();
      console.log("✅ MongoDB connection closed.");
      process.exit(0);
    });
  };

  process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
  process.on("SIGINT", () => gracefulShutdown("SIGINT"));

  process.on("unhandledRejection", (err) => {
    console.error("❌ Unhandled Promise Rejection:", err.message);
    server.close(() => process.exit(1));
  });
};

startServer();
