const lenague = {
    theme: 'light',
  };
  
  export const SET_THEME = 'SET_THEME';
  
  export const setTheme = (theme) => ({
    type: SET_THEME,
    payload: theme,
  });
  
  const themeReducer = (state = lenague, action) => {
    switch (action.type) {
      case SET_THEME:
        return { ...state, theme: action.payload };
      default:
        return state;
    }
  };
  
  export default themeReducer;
  