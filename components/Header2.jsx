


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
    <div>
        <div className="flex px-5 bg-gray-100 justify-between">
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