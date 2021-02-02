const qNumberReducer = (state = 0, action) => {
    switch(action.type) {
        case 'QNUMBER':
            if (action.payload === 'INCREASE') {
                return state + 1;
            }
            else {
                return state - 1;
            }
        default: 
            return state; 
    }

  }

  export default qNumberReducer;