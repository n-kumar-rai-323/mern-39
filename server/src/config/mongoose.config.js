const mongoose = require('mongoose');
const { dbConfig } = require('./config');

const dbInit = async () => {
  try {
    await mongoose.connect(dbConfig.mongodbUrl, {
      dbName: dbConfig.mongodbName,
      autoCreate: true,
      autoIndex: true,
    });
    console.log('✅ Database connected');
  } catch (error) {
    console.error('❌ Database connection error:', error);
    process.exit(1); // stop app if DB connection fails
  }
};

dbInit();
