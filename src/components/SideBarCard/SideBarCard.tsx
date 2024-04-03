import React from "react";
import TopToggle from "../ui/TopToggle";
import { AiOutlineFall } from "react-icons/ai";
import FormComponent from "../FormComponent/FormComponent";
import SubmitButton from "../ui/SubmitButton";
import Image from "next/image";
import sebi from "../../assets/sebi.svg";
import insta from "../../assets/insta.svg";
import link from "../../assets/link.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";
import whatsapp from "../../assets/whatsapp.svg";

function SideBarCard() {
  
  return (
    <>
      <div className="sidebar-card text-white w-[25rem] h-[max-content] rounded-[24px] bg-[#2A2136] p-[20px] flex flex-col gap-[22px]">
        <TopToggle></TopToggle>
        <div className="stock-detail w-full flex items-center no-wrap justify-between">
          <div className="name-container flex flex-col gap-[8px]">
            <div className="stock-name text-[18px] font-[700]">TATA STEEL</div>
            <div className="ticker-name text-[13px] text-[#EBECEC]">
              {"{TickerName}"}
            </div>
          </div>
          <div className="price-container flex flex-col items-end gap-[8px] ">
            <div className="stock-name flex items-center gap-[4px] text-[16px] font-[500] ">
              <span>₹</span> 6451.50
            </div>
            <div className="ticker-name flex items-center gap-[4px] text-[12px] text-[#FF5863] ">
              <AiOutlineFall className="text-[15px]"></AiOutlineFall>{" "}
              10.8(1.65%)
            </div>
          </div>
        </div>
        <div className="type-btn-container flex flex-col gap-[25px]">
          <div className="order-type-btn flex items-center justify-between w-full ">
            <div className="label text-[16px] font-[500]">Order Type</div>
            <div className="btn-container flex items-center gap-[20px]">
              <div className="select-btns flex items-center gap-[10px]">
                <input
                  type="radio"
                  value="option1"
                  className="form-radio accent-[#01C36D] h-5 w-5 text-green-500 rounded-full"
                />
                Market
              </div>
              <div className="select-btns flex items-center gap-[10px] ">
                <input
                  type="radio"
                  value="option1"
                  className="form-radio h-5 w-5 accent-[#01C36D] rounded-full"
                />
                Limit
              </div>
            </div>
          </div>
          <div className="order-type-btn flex items-center justify-between w-full font-[500]">
            <div className="label text-[16px] font-[500]">Action Type</div>
            <div className="btn-container flex items-center gap-[20px]">
              <div className="select-btns flex items-center gap-[10px]">
                <input
                  type="radio"
                  value="option1"
                  className="form-radio accent-[#01C36D] h-5 w-5 text-green-500 rounded-full"
                />
                Buy
              </div>
              <div className="select-btns flex items-center gap-[10px] ">
                <input
                  type="radio"
                  value="option1"
                  className="form-radio h-5 w-5 accent-[#01C36D] rounded-full"
                />
                Sell
              </div>
            </div>
          </div>
        </div>
        <div className="border border-solid border-[#352F3D] w-full h-[1px]"></div>
        <FormComponent></FormComponent>
        <div className="border border-solid border-[#352F3D] w-full h-[1px]"></div>
        <div className="total-price flex justify-between items-center">
          <div className="Total-Price-Label">Total Traded Value</div>
          <div className="Total-Price-Label">₹43,343</div>
        </div>
        <SubmitButton></SubmitButton>
        <div className="sebi-tag flex justify-center items-center w-full">
          <div className="sedi-num text-[10px] text-[#EBECEC] font-[400] flex gap-1 items-end">
            <span className="relative">
              <Image src={sebi} alt="My SVG" className="" />
            </span>
            SEBI Reg. No. INH000009180
          </div>
        </div>
        <div className="share-tag flex justify-center items-center w-full">
          <div className="share-icons-container flex items-center gap-1 ">
            <div className="share-icons">ShareOn</div>
            <div className="share-icons relative">
              {" "}
              <Image src={insta} alt="My SVG" className="" />
            </div>
            <div className="share-icons relative">
              {" "}
              <Image src={twitter} alt="My SVG" className="" />
            </div>
            <div className="share-icons relative">
              {" "}
              <Image src={linkedin} alt="My SVG" className="" />
            </div>
            <div className="share-icons relative">
              {" "}
              <Image src={whatsapp} alt="My SVG" className="" />
            </div>
            <div className="share-icons relative">
              {" "}
              <Image src={link} alt="My SVG" className="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBarCard;
