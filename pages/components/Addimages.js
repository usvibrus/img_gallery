import React, { useState, useEffect } from "react";

function Addimages({ isadd, setadd, setimages, images }) {

    4
  const [imgdata, setimgdata] = useState([
    {
      url: "",
      description: "",
    },
  ]);

  const [error, setError] = useState("");

  const handleformchange = (e, formfield) => {
    setimgdata({ ...imgdata, [formfield]: e.target.value });
  };

  console.log();

  const setfalse = () => {
    setadd(!isadd);
  };

  const submmit = async (e) => {
    e.preventDefault();

    const pattern = /\.(jpeg|jpg|gif|png)$/;
    if (!pattern.test(imgdata.url)) {
      setError(
        "invalid Image link , URL must end with eg /jpg, /png etc.."
      );

      return;
    }

    const response = await fetch("https://server-5p6z-p44bmko4j-usvibrus.vercel.app/add", {
      method: "POST",
      body: JSON.stringify(imgdata),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setfalse();
  };

  return (
    <div className="  bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      <div className="flex flex-col justify-center items-center p-[16px] sm:min-w-[380px]bg-[#1c1c24]  p-4 rounded-[10px]">
        <div className=" mt-[65px] w-[500px] flex flex-col gap-[30px]">
          <input
            className=" py-[15px] sm:px-[35px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px"
            type="url"
            placeholder="url"
            value={imgdata.url}
            onChange={(e) => handleformchange(e, "url")}
          />

          <input
            className="py-[15px] sm:px-[35px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px"
            type="text"
            placeholder="description"
            value={imgdata.description}
            onChange={(e) => handleformchange(e, "description")}
          />

          <button
            className="cursor pointer font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] bg-[#4acd8d] "
            onClick={submmit}
          >
            Add Images
          </button>
          {error && <p className="text-white">{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default Addimages;
