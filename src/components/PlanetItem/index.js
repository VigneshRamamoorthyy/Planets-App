import './index.css'

const PlanetItem = props => {
  const {planetDetail} = props
  const {name, description, imageUrl} = planetDetail
  return (
    <div className="planet-item-container">
      <img
        src={imageUrl}
        alt="planet"
        className="planet-img"
        alt={`planet ${name}`}
      />
      <h1 className="planet-name">{name}</h1>
      <p className="planet-description">{description}</p>
    </div>
  )
}

export default PlanetItem
