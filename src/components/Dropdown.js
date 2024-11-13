const Dropdown = () => {
    return(
        <div className="Dropdown">
            <label htmlFor="dropdown">Choose an option:</label>
            <select id="dropdown">
                <option value="">--Please choose an option--</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
        </div>
    )

}

export default Dropdown;