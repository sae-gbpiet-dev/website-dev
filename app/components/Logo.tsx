import { useRouter } from 'next/navigation'
import React from 'react'



function Logo() {

  const router = useRouter();
  return (
    <div className='font-heading cursor-pointer flex flex-col items-center justify-center' onClick={()=>{router.push("/")}}>
      <div className='lg:text-2xl text-brand-blue text-md'>SAE</div>
      <div className='text-sm font-sans flex items-center justify-center '>
        <span className='text-[8px] lg:text-sm'>—</span>
        <span className='text-[12px] lg:text-sm'>GBPIET</span>
        <span className='text-[8px] lg:text-sm'>—</span>
      </div>
    </div>
  )
}

export default Logo