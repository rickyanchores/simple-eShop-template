import React from 'react'

const Card = () => {

    const buttonCard = (e) => {
        console.log(e)
        console.log("click")
    }

  return (
    <div className='Card'>
        <h1>Card</h1>
        <img src="https://images.unsplash.com/photo-1504672281656-e4981d70414b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="grey image" />
        <button className="btn" onClick={buttonCard}>Click</button>
    </div>
  )
}

export default Card