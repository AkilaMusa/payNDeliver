import { NextResponse } from "next/server"
import dbConnect from "../../../lib/connectdb"
import businessmodel from "../../../models/businessmodel"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/route"

export const POST = async(req) => {
    try {
        await dbConnect()
        console.log('Database connected')
        
        const session = await getServerSession(authOptions)
        console.log('Session:', JSON.stringify(session, null, 2))
        
        if (!session) {
            console.log('No session found')
            return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
        }
        
        console.log('User authenticated:', session.user.id)
        
        const { name, description, address, phone, email, cuisineType, openingHours } = await req.json();
        console.log('Received data:', { name, description, address, phone, email, cuisineType, openingHours })
        console.log("userID:" , session.user.id)
        const newBusiness = await businessmodel.create({
            ownerId: session.user.id,
            name,
            description,
            address,
            phone,
            email,
            cuisineType,
            openingHours
        });
        
        console.log('New business created:', newBusiness)
        
        return NextResponse.json({ message: "business created successfully", data: newBusiness }, { status: 201 });
    } catch (err) {
        console.error('Error:', err)
        return NextResponse.json({ message: err.message }, { status: 500 })
    }
}