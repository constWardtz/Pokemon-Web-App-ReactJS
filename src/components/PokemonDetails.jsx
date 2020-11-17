import '../styles/PokemonDetails.css'

const PokemonDetails = props => {
    const {
        species,
        type,
        attack,
        hp,
        defense,
        specialAttack,
        specialDefense,
        imageLink
    } = props
    return (
        <div className="PokemonDetails">
            <h1>Your Pokemon</h1>
            <div className="img">
                <img src={imageLink} alt=""/>
            </div>
            {
                <div className="info">
                    <p>Species: {species}</p>
                    <p>Type: {type}</p>
                    <p>Attack: {attack}</p>      
                    <p>Special Attack: {specialAttack}</p>      
                    <p>Hp: {hp}</p>      
                    <p>Defense: {defense}</p>      
                    <p>Sepcial Defense: {specialDefense}</p>      
                </div>
             }
        </div>
    )
}

export default PokemonDetails
