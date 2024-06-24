"use client";
import Image from "next/image";
import Block from "./Block";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Header1 = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const key = Cookies.get("user");
    if(key){
      setAuth(true);
      return;
    }
    setAuth(false);
  }, [auth]);
  
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("user");
    setAuth(false);
    router.push("/");
  };
  return (
    <div className=" flex justify-between border-b-2 border-gray-300 items-center h-24 px-10">
      <Image
        src={"/logobooking.png"}
        alt="logo"
        width={200}
        height={200}
        className=" w-28 h-28 "
      />
      <div className=" h-full flex text-lg font-bold  text-cyan-400">
        <Block title={"Become a member"} para={"Additional 0% off on stays."} image={'https://static.vecteezy.com/system/resources/thumbnails/013/397/384/small/mmc-letter-logo-design-in-illustration-logo-calligraphy-designs-for-logo-poster-invitation-etc-free-vector.jpg'} />
        <Block
          title={"BookingCyp for business"}
          para={"Trusted by 5000 corporates."}
          image={'https://static.vecteezy.com/system/resources/thumbnails/013/397/384/small/mmc-letter-logo-design-in-illustration-logo-calligraphy-designs-for-logo-poster-invitation-etc-free-vector.jpg'}
        />
        <Block title={"List your property"} para={"Start earning in 30 min."} image={'https://static.vecteezy.com/system/resources/thumbnails/013/397/384/small/mmc-letter-logo-design-in-illustration-logo-calligraphy-designs-for-logo-poster-invitation-etc-free-vector.jpg'} />
        <Block title={"987654321"} para={"Call us to book now."} image={'https://static.vecteezy.com/system/resources/thumbnails/013/397/384/small/mmc-letter-logo-design-in-illustration-logo-calligraphy-designs-for-logo-poster-invitation-etc-free-vector.jpg'} />
        <div className="flex items-center px-1 ">
          
          
          {auth ? ( 
            <div onClick={handleLogout} className=" cursor-pointer">
              <Image
                src={"/logout-512.webp"}
                alt="demo"
                width={80}
                height={80}
                className=" w-10 h-10 rounded-full  font-bold cursor-pointer"
                
              />
              <h5>Logout</h5>
            </div>
          
         
          ) : (
            <Link href={'/login'}>
          <Image
            src={"/login.jpg"}
            alt="demo"
            width={90}
            height={90}
            className=" w-11 h-11 rounded-full mt-2"
          />
          <h5>Login/signup</h5>
          </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header1;