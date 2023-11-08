import React, { useState } from "react";
import { ImNotification } from "react-icons/im";
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';
import Tooltip from '@mui/material/Tooltip';
import { CardProps } from "../../types/CardTypes";

function Card({ cardTitle, currencyValue, currencyValueStatus, percentage, isIncrementalPercentage, percentageText, isToolTip }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`ml-4 px-2 py-4 bg-white  rounded-md lg:w-64 xl:w-72 ${isHovered && isToolTip ? 'relative' : ''}`}
      style={{
        border: "0.5px",
        boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.6)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-4 flex justify-between items-center">
        <div className="text-sm font-bold">{cardTitle}</div>
        {isToolTip && (
          <div>
            {/* <Tooltip title="Notification" placement="bottom-end"> */}
            <ImNotification className="pointer text-xl text-blue-500" />
            {/* </Tooltip> */}
          </div>
        )}
      </div>

      {isHovered && isToolTip && (
        <div className="absolute bg-white shadow-md p-2 rounded-md top-12 right-1">
          Hovered Content
        </div>
      )}

      <div className="flex justify-between text-gray-800">
        <div className="flex items-center gap-2">
          <div className="font-bold text-2xl">
            {currencyValue}</div>
          <div className="text-[16px]">{currencyValueStatus}</div>
        </div>
        <div className="flex gap-2 items-center">
          <div className={`flex gap-1 items-center ${isIncrementalPercentage ? "text-[#00a93d]" : "text-[#c70606]"}`}>
            <span>{isIncrementalPercentage ? "+" : "-"}{percentage}</span>

            <div>{isIncrementalPercentage ? <BiSolidUpArrow /> : <BiSolidDownArrow />}
            </div>
          </div>
          <div className="text-[16px]">%{percentageText}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
