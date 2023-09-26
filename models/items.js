import mongoose, {Schema} from "mongoose";

const itemsSchema = new Schema(
    {
        title: String,
        price: String,
        img: String,
        category: String,
        gender: String,
    }
   
)

const Items = mongoose.models.Items || mongoose.model("Items", itemsSchema);

export default Items