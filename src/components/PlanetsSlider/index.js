import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <div className="planet-slider-container" data-testid="planets">
      <h1 className="planets-heading">PLANETS</h1>

      <Slider {...settings}>
        {planetsList.map(eachItem => (
          <PlanetItem key={eachItem.id} planetDetail={eachItem} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
