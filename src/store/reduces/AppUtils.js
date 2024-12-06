const INIT_STATE = {
  loading: false,
  error: null,
  downloadSync: false,
  uploadSync: false,
  syncConnection : null,
  syncPercentage : null,
};

const appUtils = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'ENABLE_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'DISABLE_LOADING':
      return {
        ...state,
        loading: false,
      };
    case 'SHOW_ERROR':
      return {
        ...state,
        error: action.payload.response?.data,
      };
    case 'REMOVE_ERROR':
      return {
        ...state,
        error: null,
      };
    case 'SET_DOWNLOAD_SYNC_START':
      return {
        ...state,
        downloadSync: true,
      };
    case 'SET_DOWNLOAD_SYNC_STOP':
      return {
        ...state,
        sync: false,
      };
    case 'SET_UPLOAD_SYNC_START':
      return {
        ...state,
        uploadSync: true,
      };
    case 'SET_UPLOAD_SYNC_STOP':
      return {
        ...state,
        uploadSync: false,
      };
    case 'SET_SYNC_CONNECTION' :
         return {
            ...state,
            syncConnection:action.payload,
         }
    case 'SET_SYNC_PERCENTAGE' :
            return {
               ...state,
               syncPercentage:action.payload,
            }

    default:
      return state;
  }
};

export default appUtils;
