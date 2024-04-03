import React from "react";

function FormComponent() {
  return (
    <>
      <div className="form-container w-full flex flex-col flex-nowrap gap-[15px]">
        <div className="form-attr flex justify-between items-center">
          <div className="label">Shares</div>
          <div className="flex items-center justify-between text-[16px] font-[500] w-[10rem] rounded-[8px] h-full px-2 py-1 surface-dark">
            <button className="">-</button>
            <div className="input">12</div>
            <button className="">+</button>
          </div>
        </div>
        <div className="form-attr flex justify-between items-center">
          <div className="label">Price</div>
          <div className="flex items-center justify-center text-[16px] font-[500] w-[10rem] rounded-[8px] h-full px-2 py-1 surface-dark">
            <div className="input">₹ 6451.50</div>
          </div>
        </div>
        <div className="form-attr flex justify-between items-center">
          <div className="label-container flex flex-col gap-[5px]">
            <div className="label">Stop Loss</div>
                <div className="flex gap-[8px]">
                    <div className="btn-tag text-[11px] font-[500] flex items-center justify-center px-1 py-1 border-[1px] border-solid border-[#EBECEC] rounded-[4px]" >2.05</div>
                    <div className="btn-tag text-[11px] font-[500] flex items-center justify-center px-1 py-1 border-[1px] border-solid border-[#EBECEC]  bg-[#EBECEC] text-[black] rounded-[4px]">2.05</div>
                    <div className="btn-tag text-[11px] font-[500] flex items-center justify-center px-1 py-1 border-[1px] border-solid border-[#EBECEC] rounded-[4px]">2.05</div>
                    <div className="btn-tag text-[11px] font-[500] flex items-center justify-center px-1 py-1 border-[1px] border-solid border-[#EBECEC] rounded-[4px]">2.05</div>

                </div>
          </div>
          <div className="flex items-center justify-center text-[16px] font-[500] w-[10rem] rounded-[8px]  px-2 py-1 surface-dark">
            <div className="input">--</div>
          </div>
        </div>
        <div className="form-attr flex justify-between items-center">
          <div className="label-container flex flex-col gap-[10 px]">
            <div className="label">Target</div>
                <div className="flex gap-[8px]">
                    <div className="btn-tag text-[11px] font-[500] flex items-center justify-center px-1 py-1 border-[1px] border-solid border-[#EBECEC] rounded-[4px]" >25%</div>
                    <div className="btn-tag text-[11px] font-[500] flex items-center justify-center px-1 py-1 border-[1px] border-solid border-[#EBECEC]  bg-[#EBECEC] text-[black] rounded-[4px]">50%</div>
                    <div className="btn-tag text-[11px] font-[500] flex items-center justify-center px-1 py-1 border-[1px] border-solid border-[#EBECEC] rounded-[4px]">75%</div>
                    <div className="btn-tag text-[11px] font-[500] flex items-center justify-center px-1 py-1 border-[1px] border-solid border-[#EBECEC] rounded-[4px]">100%</div>
                </div>
          </div>
          <div className="flex items-center justify-center text-[16px] font-[500] w-[10rem] rounded-[8px]  px-2 py-1 surface-dark">
            <div className="input">--</div>
          </div>
        </div>

      </div>
    </>
  );
}

export default FormComponent;
