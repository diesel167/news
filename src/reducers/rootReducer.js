const initialState = {
  city: null,
  country: null,
  coordinates: null,
  temperature: null,
  news: null
};

function rootReducer(state= initialState, action) {
  switch (action.type) {
    case 'CITY':
        return Object.assign({},state,{city: action.payload});   //change only city field in our state
    case 'COUNTRY':
        return Object.assign({},state,{country: action.payload});
    case 'COORDINATES':
      return Object.assign({},state,{coordinates: action.payload});
    case 'TEMPERATURE':
      return Object.assign({},state,{temperature: action.payload});
    case 'NEWS':
      return Object.assign({},state,{news: action.payload});
    default:
        return state
  }
}

export default rootReducer;