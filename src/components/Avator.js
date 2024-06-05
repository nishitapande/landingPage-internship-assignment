import React from "react";

const Avator = ({ card, index }) => {
  return (
    <div className="flex items-center gap-4 mt-5" key={index}>
      <img
        className="w-14 h-14 rounded-full "
        src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651c00235cd9c2cd10fb1976_Samosa%20Party%20Client%20Image.webp"
        alt=""
      />
      <div className="font-semibold text-lg flex flex-col justify-center">
        <div>{card.name}</div>
        <div className="text-base text-gray-800  font-normal">
          {card.designation}
        </div>
      </div>
    </div>
  );
};

export default Avator;
