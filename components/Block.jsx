import Image from "next/image"


const Block = ({title,para,image}) => {
  return (
    <div className="  w-68 h-full flex items-center px-3">
        <Image src={image} alt="demo" width={200} height={200} className="w-10 h-10 rounded-full mr-5" />
        <div>
            <h3 className="font-blod" >{title}</h3>
            <p className="text-gray-400 text-xs line-clamp-1">{para}</p>
        </div>
    </div>
  )
}

export default Block