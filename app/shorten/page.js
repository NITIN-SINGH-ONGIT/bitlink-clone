"use client"

import Link from 'next/link'
import React,{useState} from 'react'

const Shorten = () => {

   const [url,seturl] = useState("")
   const [shorturl, setshorturl] = useState("")
   const [generate, setGenerate] = useState("")

   const generated = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        seturl("")
        setshorturl("")
        setGenerate(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        console.log(result)
        alert(result.message)
      })
      .catch((error) => console.error(error));
   }

  return (
    <div className="flex flex-col items-center justify-center h-[78vh] bg-gray-100 p-4">

    <h1 className="text-3xl font-bold text-gray-800 mb-6">
      Generate your short URL
    </h1>

    <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">

      <input
        value={url}
        onChange={e => {seturl(e.target.value)}}
        type="text"
        placeholder="Enter your URL..."
        className="w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />

      <input
        value={shorturl}
        onChange={e => {setshorturl(e.target.value)}}
        type="text"
        placeholder="Enter your preferred short URL"
        className="w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />

      <button 
      onClick={generated}
      className="w-full bg-emerald-400 text-black text-1xl font-bold py-3 rounded-lg  hover:bg-emerald-600 transition">
      Generate Now
      </button>

      {generate && <> <span>Your Link :</span><code> <Link href={generate} target='_blank'>{generate}</Link></code> </> }

    </div>
</div>
  )
}

export default Shorten
