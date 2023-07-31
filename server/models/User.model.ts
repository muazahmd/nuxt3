import mongoose from "mongoose";

// User schema
const schema: mongoose.Schema = new mongoose.Schema(
	{
		fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    father_name: {
      type: String,
      required: true,
    },
    education: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
	},
	{ timestamps: true }
);

// User model
export default mongoose.model("User", schema);