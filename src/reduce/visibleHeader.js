const intialStateHeader = {
  
}

export default function(state = intialStateHeader, action = {}) {
    switch(action.type) {
        case 'PATH':
          return {
            ...state,
            class: action.nameClass,
          };
        default:
          return state
      }
}