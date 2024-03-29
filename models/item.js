const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const itemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      default:
        "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty-300x240.jpg",
    },
    likes: [{ type: ObjectId, ref: "User" }],
    // comments: [
    //   {
    //     text: String,
    //     postedBy: {
    //       type: ObjectId,
    //       ref: "User"
    //     }
    //   }
    // ],
    postedBy: {
      type: ObjectId,
      ref: "User",
    },
    boughtBy: {
      type: ObjectId,
      ref: "User",
    },
    status: {
      type: String,
      enum: ["UNSOLD", "SOLD"],
      default: "UNSOLD",
    },
    catogery: {
      type: String,
      enum: [
        "Medical Supplies",
        "Electronics",
        "Supplements",
        "Beauty & Cosmectics",
        "Furnitures & Collectibles",
        "Services",
        "Weapons",
      ],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    viewCount: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

mongoose.model("Item", itemSchema);
