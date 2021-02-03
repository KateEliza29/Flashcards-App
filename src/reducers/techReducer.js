const techReducer = (state = null, action) => {
    switch(action.type) {
        case 'TECH':
            return state = action.payload;
        default: 
            return state; 
    }

  }

  export default techReducer;