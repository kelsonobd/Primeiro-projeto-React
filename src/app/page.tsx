"use client"

import { CustomButton } from "@/components/CustomButtom";

const Page = () =>{


  return(
    <div className="w-screenh h-screen flex justify-center items-center">
      <CustomButton label="Clique Aqui" />
      <CustomButton label="Clique Aqui 2" />
      <CustomButton label="Clique Aqui 3" />
    </div>
  );
}

export default Page;