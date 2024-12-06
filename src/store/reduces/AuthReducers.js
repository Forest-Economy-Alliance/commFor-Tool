const INIT_STATE = {
  user: null,
  fieldSite: null,
  armLength: null,
  language: null,
};

const AuthReducers = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'SET_USER_INFO':
      console.log('TALK IS CHEAP SHOW ME THE PAYLOAD', action.payload);
      return {
        ...state,
        user: action.payload,
      };
    case 'SET_FIELD_SITE':
      console.log('TALK IS CHEAP SHOW ME THE FIELD SITE', action.payload);
      return {
        ...state,
        fieldSite: action.payload,
      };
    case 'SET_ARM_LENGTH':
      console.log('TALK IS CHEAP SHOW ME THE ARM LENGTH', action.payload);
      return {
        ...state,
        armLength: action.payload,
      };
    case 'SET_USER_LANGUAGE':
      console.log('TALK IS CHEAP SHOW ME THE LANGUAGE NAME', action.payload);
      return {
        ...state,
        language: action.payload,
      };
    case 'LOG_OUT':
      console.log('REMOVING ALL THE PROMISES');
      return {
        ...state,
        user: null,
        fieldSite: null,
        armLength: null,
        language: null,
      };
    default:
      return state;
  }
};

export default AuthReducers;
