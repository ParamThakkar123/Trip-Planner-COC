import mongoose from "mongoose";


const connect = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect("mongodb+srv://paramthakkar864:paramt@cluster0.hnqrxte.mongodb.net/Tripplan?retryWrites=true&w=majority&appName=Cluster0", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongo Connection successfully established.");
  } catch (error) {
    throw new Error("Error connecting to Mongoose");
  }
};

export default connect;