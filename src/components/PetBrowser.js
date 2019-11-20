import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  mapPets = () => {
    return this.props.pets.map(pet => <Pet key={pet.id} onAdoptPet={this.props.onAdoptPet} pet={pet}/>)
  }
  
  render() {
    return <div className="ui cards">{this.mapPets()}</div>
  }
}

export default PetBrowser