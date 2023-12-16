import React from 'react'

const SkillCard = ({skill}) => {
    const {id, name, thumb} = skill || {}
  return (
    <>
        <div className="card  bg-base-100 shadow-xl border-t-2 border-indigo-600">
              <figure className="px-10  ">
                <img
                  src={thumb}
                  alt="Shoes"
                  className="rounded-xl  w-full h-full "
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-xl"> {name} </h2>
              </div>
            </div>
    </>
  )
}

export default SkillCard