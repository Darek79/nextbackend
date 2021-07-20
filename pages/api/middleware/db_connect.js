import {connect} from "mongoose";

export async function dbConnection() {
  try {
    await connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("db connected");
  } catch (error) {
    if (error) throw new Error("db failed to connect");
  }
}
