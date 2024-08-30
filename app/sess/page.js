"use client"
import { useSession } from "next-auth/react";
import { useEffect } from "react";
const stuff = () => {
    const { data: session } = useSession();
    if(session){
      console.log(session.user.id)
      console.log(session)
  
    }

    return (  
        <>
        <p>welcome: {session?.user?.email}</p>
        <p>sessionID: {session?.user?.id}
        </p>
        </>
    );
}
 
export default stuff;