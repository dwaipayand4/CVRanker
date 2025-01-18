// Initial state for the Redux store
const initialState = {
    buttonClicked: null, // Tracks which button was clicked
};

// Reducer function to handle state updates
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BUTTON_CLICKED':
            // Update the state with the button clicked
            return { ...state, buttonClicked: action.payload };
        default:
            // Return the current state if no relevant action is found
            return state;
    }
};

export default reducer;