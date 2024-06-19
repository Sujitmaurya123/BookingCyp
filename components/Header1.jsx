import Image from "next/image"
import Block from "./Block"
import Link from "next/link"



const Header1 = () => {
  return (
    <div className="flex justify-between border-b-2 border-gray-300 items-center h-24 px-10">
        <Image src={'/logobooking.png'} alt="" width={200} height={200} className="w-24 h-24"></Image>
       <div className=" h-full flex">
         <Block  title={'Become a member'} para={'Additional 0% off on stays.'} />
         <Block  title={'BookCyp for business'} para={'Trusted by 5000 corporates.'} />
         <Block  title={'List your property'} para={'Start earning in 30 min.'} />
         <Block  title={'987654321'} para={'Call us to book now.'} />
         <div className="flex items-center">
       
            <Link href={'/login'}>
              <h3 className="font-bold">Login/Signup</h3>
            </Link>
         </div>
       </div>
    </div>
  )
}

export default Header1