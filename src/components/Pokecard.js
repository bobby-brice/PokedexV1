import React, { Component } from 'react';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let numToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number);

class Pokecard extends Component {
  render() {
    let imgSrc = `${POKE_API}${numToThree(this.props.id)}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{ this.props.name }</h1>
        <div className="Pokecard-image">
          <img src={imgSrc} alt={this.props.name} />
        </div>
        <div className="Pokecard-data">Type: {this.props.type}</div>
        <div className="Pokecard-data">Exp: {this.props.exp}</div>
      </div>
    )
  }
}

export default Pokecard;