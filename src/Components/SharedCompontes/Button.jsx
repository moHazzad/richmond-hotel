import React from "react";

function Button({ buttonName }) {
  return (
    <div className=" border border-[#DCC69C] py-1 px-1 text-[#DCC69C] ">
      <button className="font-semibold text-md tracking-widest border border-[#3C4A33] hover:border hover:border-[#DCC69C] p-2 px-6">
        {buttonName}
      </button>
    </div>
  );
}

export default Button;
