"use client"

import { CustomButton } from "@/components/CustomButtom";

const Page = () =>{

  const handleButton1 = () => alert('clicou no botao 1');
    const handleButton2 = () =>  alert('clicou no botao 2');
      const handleButton3 = () =>  alert('clicou no botao 3');
  
  


  return(
    <div className="w-screenh h-screen flex justify-center items-center">
      <CustomButton label="Clique Aqui" onClick={handleButton1} />
      <CustomButton label="Clique Aqui 2" onClick={handleButton2}/>
      <CustomButton label="Clique Aqui 3" onClick={handleButton3}/>
    </div>
  );
}

export default Page;