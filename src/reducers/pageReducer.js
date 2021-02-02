const pageReducer = (state = 'HOME', action) => {
    if (action.type === 'PAGE') {
        switch(action.payload) {
            case 'HOME':
                state = 'HOME';
                return state;
            case 'SET':
                state = 'SET';
                return state;
            default: 
                return state; 
        }
    }
    return state;
  }

  export default pageReducer;