const setNumReducer = (state = null, action) => {
    switch(action.type) {
        case 'SETNUM':
            return state = action.payload;
        default: 
            return state; 
    }

  }

  export default setNumReducer;