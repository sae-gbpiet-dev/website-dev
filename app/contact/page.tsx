import React from 'react'
import PageHeader from '../components/PageHeader'

function page() {
  return (
    <div className='h-screen '>

        <PageHeader title='CONTACT US' />

        <h1 className="text-center text-xl p-10">Contact us for further queries</h1>

        <div className='flex h-full w-full justify-center p-10 gap-10 '>
            <div className="w-[40%] h-[80%] bg-brand-blue/50 p-8 rounded-tl-4xl rounded-br-4xl">

                <h1 className="text-center text-xl mb-4">Drop us a message</h1>
                
                <form>
                    <input type="text" placeholder='Name' className='w-full p-4 rounded-tl-2xl rounded-br-2xl mb-4 bg-brand-gold placeholder:text-brand-dark shadow-md' />
                      <input type="text" placeholder='Email' className='w-full p-4 rounded-tl-2xl rounded-br-2xl mb-4 bg-brand-gold placeholder:text-brand-dark shadow-md' />
                      <input type="text" placeholder='Subject' className='w-full p-4 rounded-tl-2xl rounded-br-2xl mb-4 bg-brand-gold placeholder:text-brand-dark shadow-md' />
                      <textarea placeholder='Message' className='w-full  p-4 rounded-tl-2xl rounded-br-2xl mb-4 bg-brand-gold placeholder:text-brand-dark resize-none shadow-md'></textarea>
                </form>
                
                
            </div>
            <div className="w-[40%] h-[80%] bg-white rounded-tl-4xl rounded-br-4xl"></div>
        </div>

    </div>
  )
}

export default page