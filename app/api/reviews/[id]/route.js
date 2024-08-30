import { NextResponse } from "next/server"
import dbConnect from "../../../../lib/connectdb"
import reviews from "../../../../models/reviews"
import { ObjectId } from 'mongodb';

export const GET = async(req,{params})=>{
    try{
        await dbConnect()  
        const {id} = params
        const data = await reviews.find({ 
            businessId: new ObjectId(id) })   
         if(!data.length===0){
        return NextResponse.json({message:"no reviews found!"},{status:400})
        }
        return NextResponse.json({message:"success!",data:data},{status:200})
    }catch(err){
        return NextResponse.json({message:err.message},{status:500})
    }
}