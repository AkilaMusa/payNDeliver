
'use client';
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  if(session){
    console.log(session)

  }
  // if (session) {
  //   return <p>Welcome, {session.user.email}</p>;
  // }
  // return <p>Access Denied</p>;
  return (
    <>
    landing page....
        </>
  );


}
