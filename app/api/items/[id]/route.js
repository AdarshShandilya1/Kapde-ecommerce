import connectMongoDB from "@/libs/mongodb"
import Items from "@/models/items"
import { NextResponse } from "next/server";

export async function GET(request, {params}){
    const {id} = params;
    await connectMongoDB();
    const item = await Items.findOne({ _id: id})
    return NextResponse.json({item}, {status: 200 })
}