import dbConnect from "../../../../lib/connectdb";
import businessmodel from "../../../../models/businessmodel";


export async function GET(req,{params}){
    try{
        await dbConnect()
        const {id} = params
        const business = await businessmodel.findById(id)
        if (!business) {
            return NextResponse.json({ message: "Business not found!" }, { status: 404 });
          }
          return NextResponse.json({ message: "Success!", data: business }, { status: 200 });
        } catch (err) {
          return NextResponse.json({ message: err.message }, { status: 500 });
        }  
    
}