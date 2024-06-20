
import Image from 'next/image'
import React from 'react'

const SingleHotel = () => {
  return (
   <div className='w-7/12 mx-auto  my-10'>
     <Image src={"https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} alt="hotel" width={200} height={200}
                className="w-full h-large-box my-5   " />
        <div className=''>
            <h3 className='text-3xl font-bold'>Lorem ipsum dolor sit amet consectetur Nemo, velit.
                 Voluptate excepturi minima blanditiis</h3>
            <p className='text-xl my-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, velit.
                 Voluptate excepturi minima blanditiis autem cupiditate numquam ut 
                 ducimus ad sed sunt esse, quod quam, iure aperiam atque assumenda. Natus.</p>
             <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg">Price:4999</button>
            <p className='text-3xl font-bold my-5'>Facilities :</p>
            <ul className='flex text-xl  justify-between'>
                <li>Swimming Pool</li>
                <li>Dogs</li>
                <li>garden</li>
                <li>Loundry</li>
                <li>Cricket</li>

            </ul>
             <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg">Book Now</button>

        </div>
   </div>
  )
}

export default SingleHotel