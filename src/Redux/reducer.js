import { GET_DATA } from "./action";

const initialstate = {
  armoury: [],
  loading: true,
};

export const armouryReducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_DATA: {
      return {
        ...state,
        armoury: action.payload,
        loading: false,
      };
    }

    default:
      return state;
  }
};