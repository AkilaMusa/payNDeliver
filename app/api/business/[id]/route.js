import dbConnect from "../../../../lib/connectdb";
import businessmodel from "../../../../models/businessmodel";
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

export async function GET(req, { params }) {
  try {
    await dbConnect();
    const { id } = params;
    const business = await businessmodel.findOne({ _id: new ObjectId(id) });
    
    if (!business) {
      return NextResponse.json({ message: "Business not found!" }, { status: 404 });
    }
    
    return NextResponse.json({ message: "Success!", data: business }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}