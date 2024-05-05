import "./Card.css"

function card({title= "titulo por defecto", descripcion = "descripcion por defecto", image = "image" }) {
  return (

    <div className='Card'>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>{descripcion}</p>
    </div>
  )
}

export default card