import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  addedDate: {
    type: Date,
    
    default: Date.now(), //by default value is current date
  },
  completedDate: {
    type: Date,
    required: true,
    },

  status: {
    type: String,
    enum: ["pending", "completed"],  //only available values of enums 
    default: "pending",  //by default value is pending
  },

  userId: {
    type: mongoose.ObjectId, //this is the id of the user who created the task
    required: true,
  },
});

export const Task =
  mongoose.models.tasks || mongoose.model("tasks", TaskSchema); //tasks is the name of the collection