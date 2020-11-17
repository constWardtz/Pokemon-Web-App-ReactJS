/* Style */
import '../styles/Form.css'

const Form = (props) => {
    const {
        handleOnChange,
        pokemonValue,
        handleOnSubmit
    } = props 
    return(
        <form onSubmit={handleOnSubmit} class="Form">
            <h1>Pokemon Stats</h1>
            <input type="text" value={pokemonValue} onChange={ handleOnChange } placeholder="Search.."/>
            <button type="submit">Catch Pokemon</button>
        </form>
    )
}

export default Form