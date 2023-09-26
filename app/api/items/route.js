import connectMongoDB from "@/libs/mongodb"
import Items from "@/models/items";
import { NextResponse } from "next/server";

export async function POST(request){
    const{title, price, img, category, gender} = await request.json()
    await connectMongoDB();
    await Items.create({title, price, img, category, gender})
    return NextResponse.json({message: "Item created"}, {status: 201})
}

export async function GET(){
    await connectMongoDB();
    const items = await Items.find()
    return NextResponse.json({items})
}

export async function DELETE(){
    const id = request.nextUrl.searchParams.get("id")
    await connectMongoDB()
    await Items.findByIdAndDelete(id)
    return NextResponse.json({message: "Topic deleted"}, {status: 200}) 
}