import React from 'react'
import './Contact.scss'

export const Contact = () => {
  return (
    <>
        <div className='contact'>
            <h2 className='contact_title'>¿Te gusta lo que ves?</h2>
            <a href='mailto:patriciafernandezruibal@gmail.com'><button href='mailto:patriciafernandezruibal@gmail.com' className='contact_btn1'>Hablemos <svg width="28px" height="28px" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><g clipPath="url(#send-diagonal_svg__clip0_2476_13290)" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.152 3.553L11.178 21.004l-1.67-8.596L2 7.898l20.152-4.345zM9.456 12.444l12.696-8.89"></path></g><defs><clipPath id="send-diagonal_svg__clip0_2476_13290"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></svg></button></a>
        </div>
    </>
  )
}
