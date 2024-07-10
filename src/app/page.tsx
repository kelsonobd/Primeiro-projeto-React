"use client"

import { FormEvent } from "react";

const Page = () => {

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    alert("foi!!!")

  }


  return (
    <div className="w-screenh h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl mb-3">Form de login</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default Page;