import { useState, useEffect } from 'react'
import axios from 'axios'
import cors from 'cors'

/* Components */ 
import Form from './components/Form'
import PokemonDetails from './components/PokemonDetails'

/* Style */ 
import './styles/App.css'
const App = () => {
  const [pokemon, setPokemon] = useState([])
  const [pokemonValue, setPokemonValue] = useState('')
  const [query, setQuery] = useState('pikachu')
  const [imageLink, setImageLink] = useState('')

  useEffect(() => {
      catchPokemon()
  }, [query])
  
  const catchPokemon  = async () => {
    const result = await axios.get(`${cors}https://pokeapi.co/api/v2/pokemon/${query.toLowerCase().trim()}`)
    
    console.log("result: ", result.data)
    setPokemon(result.data)
    setImageLink(result.data.sprites.back_default)
  }
 
  const handleOnChange = e => {
    const { value } = e.target
    setPokemonValue(value)
  }

  const handleOnSubmit = e => {
    e.preventDefault()
    setQuery(pokemonValue)
    setPokemonValue('')
  }
  
  return (
    <div className="App">
      <Form
        handleOnChange={handleOnChange}
        pokemonValue={pokemonValue}
        handleOnSubmit={handleOnSubmit}
      />
      <PokemonDetails
        species={pokemon.name}
        type={pokemon.types[0].type.name}
        attack={pokemon.stats[1].base_stat}
        hp={pokemon.stats[0].base_stat}
        defense={pokemon.stats[2].base_stat}
        specialAttack={pokemon.stats[3].base_stat}
        specialDefense={pokemon.stats[4].base_stat}
        imageLink={imageLink}
      />
    </div>
  )
}

export default App