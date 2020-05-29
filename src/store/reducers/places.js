// import {
//   ADD_PLACE,
//   DELETE_PLACE,
//   SELECT_PLACE,
//   DESELECT_PLACE
// } from "../actions/actionTypes";

// const initialState = {
//   places: [],
//   selectedPlace: null
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_PLACE:
//       return {
//         ...state,
//         places: state.places.concat({
//           key: Math.random(),
//           name: action.placeName,
//           image: {
//             uri:
//               "https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg"
//           }
//         })
//       };
//     case DELETE_PLACE:
//       return {
//         ...state,
//         places: state.places.filter(place => {
//           return place.key !== state.selectedPlace.key;
//         }),
//         selectedPlace: null
//       };
//     case SELECT_PLACE:
//       return {
//         ...state,
//         selectedPlace: state.places.find(place => {
//           return place.key === action.placeKey;
//         })
//       };
//     case DESELECT_PLACE:
//       return {
//         ...state,
//         selectedPlace: null
//       };
//     default:
//       return state;
//   }
// };

// export default reducer;




import {
  ADD_PLACE,
} from "../actions/actionTypes";

const initialState = {
  places:0,
};

const reducer = (state = initialState, action) => {
  console.log("in reducer");
  switch (action.type) {
    
    case ADD_PLACE:
      return {
        // ...state,
        // places: action.placeName
        places:state.places+1
      };
   
    default:
      return state;
  }
};

export default reducer;

