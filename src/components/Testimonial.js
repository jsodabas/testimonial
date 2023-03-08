import React from 'react'
import users from '../users.js'

const Testimonial = () => {
  return (
    <>
        <main className='main-content'>
            <div className='container'>
                {
                    users.map((user, index) => {
                        return (
                            <div className='user' key={index}>
                                <div className='img'>
                                    <img src={user.img} alt={user.name} className='img-content' />
                                </div>
                                <h2>{user.name}</h2>
                                <p>— "{user.title.substring(0, 45)}"</p>
                            </div>
                        )
                    })
                }
            </div>
        </main>
    </>
  ) 
}

export default Testimonial