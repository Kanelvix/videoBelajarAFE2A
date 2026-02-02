import React from 'react'
import flag from '../../assets/flag.svg'

function PhoneNumberField(props) {
  return (
    <div className='flex gap-1 flex-col'>
      <label className='text-[#333333AD] text-sm'>{props.label} <span className='text-[#FF5C2B]'>*</span></label>
      <div className="h-12 flex gap-2">
        <div className="flex items-center min-w-0 rounded-lg outline-none border-2 border-[#3A35411F] justify-between cursor-pointer">
          <div className='bg-[#F4F5FA] w-11 h-full flex justify-center items-center rounded-s-md border-r-2'>
            <img src={flag} alt="Indonesia" />
          </div>
          <select name="countries" id="countries" className='outline-none px-2 flex-1 min-w-0 cursor-pointer'>
            <option value="indonesia">+ 62</option>
          </select>
        </div>
        <div className="flex items-center flex-1 min-w-0 rounded-lg outline-none border-2 border-[#3A35411F] p-3">
          <input type="text" placeholder='821xxxxxxx' className='outline-none w-full min-w-0' />
        </div>
      </div>
    </div>
  )
}

export default PhoneNumberField;