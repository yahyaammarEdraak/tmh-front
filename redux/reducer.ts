import { combineReducers } from "redux";

// counterReducer.js
const initialState = {
  type: null,
  user: null,
  users: [],
  cities: [],
  categories: [],
  subCategories: [],
  genders: [],
  professionals: [],
  availibility: [],
  availibilitydata: [],
  currentCat: null,
  currentSub: null,
  currentGen: null,
  currentProfessional: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        state,
      };
    default:
      return state;
  }
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case "TYPE":
      return {
        ...state,
        type: action.payload,
      };
    case "REMOVETYPE":
      return {
        ...state,
        type: action.payload,
      };
    case "USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "REMOVEUSERS":
      return {
        ...state,
        users: null,
      };
    case "USER":
      return {
        ...state,
        user: action.payload,
      };
    case "REMOVEUSER":
      return {
        ...state,
        user: null,
      };
    case "GETCITIES":
      return {
        ...state,
        cities: action.payload,
      };
    case "REMOVECITIES":
      return {
        ...state,
        cities: null,
      };
    case "GETCATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    case "SUBCATEGORIES":
      return {
        ...state,
        subCategories: action.payload,
      };
    case "REMOVESUBCATEGORIES":
      return {
        ...state,
        subCategories: null,
      };
    case "REMOVECATEGORIES":
      return {
        ...state,
        categories: null,
      };
    case "GETGENDERS":
      return {
        ...state,
        genders: action.payload,
      };
    case "REMOVEGENDERS":
      return {
        ...state,
        genders: null,
      };
    case "GETAVAILIBILITY":
      return {
        ...state,
        availibility: action.payload,
      };
    case "REMOVEAVAILIBILITY":
      return {
        ...state,
        availibility: null,
      };
    case "GETAVAILIBILITYDATA":
      return {
        ...state,
        availibilitydata: action.payload,
      };
    case "REMOVEAVAILAIBILITYDATA":
      return {
        ...state,
        availibilitydata: null,
      };
    case "CURRENTCAT":
      return {
        ...state,
        currentCat: action.payload,
      };
    case "CURRENTSUBCAT":
      return {
        ...state,
        currentSub: action.payload,
      };
    case "CURRENTGENDER":
      return {
        ...state,
        currentGen: action.payload
      }
    case "GETPROFESSIONALS":
      return {
        ...state, 
        professionals: action.payload
      }
    case "CURRENTPROFESSIONAL":
        return {
          ...state, 
          currentProfessional: action.payload
        }
    case "REMOVEALLDATA":
      return {
        ...state,
        users: null,
        cities: null,
        categories: null,
        genders: null,
        availibility: null,
        availibilitydata: null,
      };

    default:
      return state;
  }
};

// reducers/index.js

const rootReducer = combineReducers({
  auth: authReducer,
  appData: appData,
});

export default rootReducer;
