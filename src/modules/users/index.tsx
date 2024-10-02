import React, { useEffect, useState } from "react";
import { useHeaderContext } from "../../context/header";
import CustomButton from "../../components/button";

const Users = () => {
  const { setheader } = useHeaderContext();
  // let body: any = {
  //   name: "james",
  // };
  const [currrentName, setCurrentName] = useState("user");
  const [color, setColor] = useState<string>("bg-black");
  const [btnColor, setBtnColor] = useState("text-black");
  const [bgColor, changeBgColor] = useState<string>("bg-white");
  const [flex, changeFlex] = useState("flex-row");
  const [textColor, changeColor] = useState("text-white");

  let names: string[] = ["obi", "ada", "jacob"];
  let colors: string[] = ["bg-red-500", "bg-blue-500", "bg-yellow-500"];

  function handleChangeNam() {
    let random = Math.floor(Math.random() * names.length);
    let randomName = names[random];
    let randomColor = colors[random];
    setCurrentName(randomName);
    setColor(randomColor);
    setBtnColor("text-white");
  }

  function changeBackground() {
    changeBgColor("bg-zinc-700");
    setBtnColor("text-white");
    changeFlex("flex-col");
    setColor("bg-white");
    changeColor("text-black");
  }

  // useEffect(() => {
  //   console.log("hello wolrd");
  // }, [color]);

  useEffect(() => {
    setheader("Users");
  }, []);

  return (
    <div className={`p-12 flex flex-col gap-[30px] h-full ${bgColor}`}>
      <div className={`flex gap-[20px] ${flex}`}>
        <div
          className={`border-green-500 border inline p-4 rounded-lg mr-3 ${color} ${textColor}`}
        >
          {currrentName}
        </div>

        <button
          onClick={handleChangeNam}
          className={`border-2 bg-red-500 ${btnColor}`}
        >
          change name
        </button>
      </div>

      <button
        onClick={changeBackground}
        className={`border-2 bg-gray-500 ${btnColor}`}
      >
        Full background change
      </button>
    </div>
  );
};

export default Users;
