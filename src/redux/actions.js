// Action to set which button was clicked
export const setButtonClicked = (buttonName) => ({
    type: 'SET_BUTTON_CLICKED',
    payload: buttonName, // Pass the button name to the reducer
});