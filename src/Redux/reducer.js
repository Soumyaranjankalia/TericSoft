import {
  GET_DATA,
  GET_AQUATICS_DATA,
  GET_CYCLING_DATA,
  GET_EQUESTRIAN_DATA,
  GET_EXTREME_DATA,
  GET_GOLF_DATA,
  GET_GYMNASTICS_DATA,
  GET_LAKEANDSEA_DATA,
} from "./action";

const initialstate = {
  armoury: [],
  aquatics: [],
  cycling: [],
  equestrian: [],
  extreme: [],
  golf: [],
  gymnastics:[],
  lakeandsea:[],
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

    case GET_AQUATICS_DATA: {
      return {
        ...state,
        aquatics: action.payload,
        loading: false,
      };
    }

    case GET_CYCLING_DATA: {
      return {
        ...state,
        cycling: action.payload,
        loading: false,
      };
    }

    case GET_EQUESTRIAN_DATA: {
      return {
        ...state,
        equestrian: action.payload,
        loading: false,
      };
    }

    case GET_EXTREME_DATA: {
      return {
        ...state,
        extreme: action.payload,
        loading: false,
      };
    }

    case GET_GOLF_DATA: {
      return {
        ...state,
        golf: action.payload,
        loading: false,
      };
    }

    case GET_GYMNASTICS_DATA: {
      return {
        ...state,
        gymnastics: action.payload,
        loading: false,
      };
    }

    case GET_LAKEANDSEA_DATA: {
      return {
        ...state,
        lakeandsea: action.payload,
        loading: false,
      };
    }


    default:
      return state;
  }
};
