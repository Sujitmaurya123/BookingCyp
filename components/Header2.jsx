


const Header2 = () => {

const List =[
    {
        name:'UttarPradesh'
    },
    {
        name:'Mumbai'
    },
    {
        name:'Hyderabad'
    },
    {
        name:'Bihar'
    },
    {
        name:'Goa'
    },
]

  return (
    <div className=" mt-2">
        <div className="flex px-5  justify-between  text-black font-semibold">
            {
                List.map((e)=>{
                    return(
                        <span key={e} >{e.name}</span>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Header2