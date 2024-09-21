// import React, { useEffect, useState } from 'react'

import { useState } from "react"

// export default function Contact() {
//   const [count, setcount] = useState(0);
//   useEffect(() => {
//     console.log("componenet rerender");
//   })
//   const btnclik = () => {
//     setcount(count + 1);
//     setcount(count + 1);
//   }

//   return (
//     <div>
//       <button onClick={btnclik}>clickme</button>
//       <p>you clicked{count }line</p>
//     </div>
//   )
// }

export default function Contact() {
  const [inputvalue, Setinputvalue] = useState('');
  const [match, Setmatch] = useState('');
  const arr = [
    {
      name: "mihir" ,
      email:"mihir@123gmail.com"
    },
    {
      name: "tirth" ,
      email:"tirth@123gmail.com"
    },
  ] 
  const handleclik = () => {
    if (inputvalue) {
      let found = false;
      arr.forEach((value) => {
        if (value.email === inputvalue) {
          console.log("email qual ho gaya");
          found = true;
          Setmatch(value.email);
        }
      });
      if (!found) {
        console.log("galat data dala");
        Setmatch("no data found");
      }
      
    }
    else {
      console.log("no data found");
    }
  }
  
  return (
    <div>
      <input type="text" id="text" name='text' onChange={(e)=>Setinputvalue(e.target.value)}></input>
      <button onClick={handleclik}>
        click
      </button>
      {match }
     
    </div>
  )
}