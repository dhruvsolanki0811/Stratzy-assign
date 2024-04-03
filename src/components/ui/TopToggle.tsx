import React from 'react'

function TopToggle() {
  return (
    <>
        <div className="toggle surface-dark text-[14px] w-full h-[3rem] rounded-[12px] py-[7px] px-[12px]  flex items-center gap-[10px]">
            <div className="toggle-btn toggle-btn-bg text-white w-[50%] h-full rounded-[12px] flex justify-center items-center">Trade</div>         
            <div className="toggle-btn  text-white w-[50%] h-full flex justify-center items-center text-[#EBECEC]">Invest</div>         
        </div>
    </>
  )
}

export default TopToggle