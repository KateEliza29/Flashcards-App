const iconsReducer = (state = ["fas fa-home", "fas fa-user-circle", "fas fa-chart-pie", "fas fa-cog"], action) => {
    switch(action.type) {
        case 'ICONS':
            state = [];
            action.payload.foreach((icon) => state.push(icon));
            return state;
        default: 
            return state; 
    }

  }
//Potentially change this so that it accepts an icon and an onclick instruction? Would solve the home 
  export default iconsReducer;