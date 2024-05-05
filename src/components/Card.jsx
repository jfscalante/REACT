import "./Card.css"
import { Link } from "react-router-dom";
function card({title= "titulo por defecto", description = "descripcion por defecto", image = "image" }) {
  return (

    <div className='Card'>
      <Link to={title}>
        <h2>{title}</h2>
        <p>{description}</p>
        <img src={image} alt={image + "imagen"} />

      </Link>
      
    </div>
  )
}

export default card