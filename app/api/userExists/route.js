import { connectMongoDB1 } from "@/libs/mongodb1";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req){
    try {
        await connectMongoDB1()
        const {email} = await req.json()
        const user = await User.findOne({email}).select("_id")
        console.log("user: ", user)
        return NextResponse.json({user})

    } catch (error) {
        console.log(error)
    }
}