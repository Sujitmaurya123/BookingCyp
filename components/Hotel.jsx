import Image from "next/image"
import Link from "next/link"



const Hotel = () => {
  return (
    <div className="border-2 border-red-400 rounded-lg h-72 w-full mb-5 p-5">
            <div className="flex    ">
                <Image src={"https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} alt="hotel" width={200} height={200}
                className="w-96 h-60 mr-3 " />
                <div className="grid grid-rows-4 ">
                    <Image src={"https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} alt="hotel" width={200} height={200}
                className="w-28  " />
                  <Image src={"https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} alt="hotel" width={200} height={200}
                className="w-28  " />
                  <Image src={"https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} alt="hotel" width={200} height={200}
                className="w-28  " />
                  <Image src={"https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} alt="hotel" width={200} height={200}
                className="w-28  " />
                </div>
                <div className="ml-20 ">
                    <h2 className="font-bold text-2xl line-clamp-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis </h2>
                    <p className="text-justify my-5 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, repellendus praesentium. Laudantium sit reprehenderit commodi modi minima neque, ullam aut.
                         Tempora quibusdam illum eius facilis voluptatem perspiciatis facere ratione quos!</p>
                    <p className="text-2xl my-5">
                        <span className="font-bold">Facilities:</span>
                        <span>Free wifi , Pet care , Swimming Pool , Beaches , Resort</span>
                    </p>
                        
                        <div className="flex ">
                        <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg">Price:4999</button>
                        <Link href={'/hotels/2'}  className="text-xl font-bold text-red-600 ml-10">See Details</Link>
                        </div>
                </div>
            </div>
    </div>
  )
}

export default Hotel