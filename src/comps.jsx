// import React from 'react'

const comps = () => {
  return (
    <div>
      <form>
      <input type="text" placeholder="enter your name " onChange={((e)=>{e.target.value})}/>
      <input type="email" placeholder="enter your Email" onChange={((e)=>{e.target.value})}/>
      <button type="submit">submit</button>

      </form>
    </div>
  )
}

export default comps
