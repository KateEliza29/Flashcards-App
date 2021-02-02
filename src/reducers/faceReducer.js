const faceReducer = (state = 'FRONT', action) => {
    switch(action.type) {
        case 'FACE':
            state = action.payload;
            return state;
        default: 
            return state; 
    }

  }

  export default faceReducer;