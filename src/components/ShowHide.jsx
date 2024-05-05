import React from 'react'
import { useState } from 'react'

function ShowHide() {
    const [Show, setShow] = useState(true)
    const handleClick = (event) => {
        setShow(!Show)
    }
  return (
    <div>
        {Show && <h2>Jimmy !</h2>}
       <button onClick={handleClick}>{Show ? "ocultar":"mostrar"}</button>
    </div>
  )
}

export default ShowHide