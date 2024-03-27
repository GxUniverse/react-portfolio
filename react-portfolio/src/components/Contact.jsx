import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
        <form action='' method='POST' encType='multipart/form-data'>
            <div>
                <div>
                    <lavel>Name</lavel>
                    <input type="text" name='name' />
                </div>
                <div>
                    <lavel>Phone Number</lavel>
                    <input type="text" name='phone' />
                </div>
            </div>
            <div>
                <lavel>Email</lavel>
                <input type="email" name="name" />
            </div>
            <div>
                <lavel>Subject</lavel>
                <input type="text" name="subject" />
            </div>
            <div>
                <lavel>Message</lavel>
                <textarea rows="10" name="message" ></textarea>
            </div>
        </form>
    </div>
  )
}

export default Contact