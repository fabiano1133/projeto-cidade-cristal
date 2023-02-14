import mongoose from "mongoose";

const url_database = process.env.URL_DB;
const url_database_cluster = process.env.URL_DB_CLUSTER;

export const connect = async () => {
  try {
    await mongoose.connect(`${url_database_cluster}`),
      console.log("DB_CONNECTED");
  } catch (error) {
    console.log(`DB_ERROR: ${error}`);
  }
};

mongoose.set("strictQuery", true);
