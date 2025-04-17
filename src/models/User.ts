import mongoose, { InferSchemaType } from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
})

export type UserType = InferSchemaType<typeof userSchema>;

const User = mongoose.model("User", userSchema);
export default User;