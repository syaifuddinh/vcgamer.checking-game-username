// redux/reducer.js
const initialState = { isSidebarVisible: true };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SWITCH-SIDEBAR-VISIBILITY':
      return { isSidebarVisible: !state.isSidebarVisible };
    case 'HIDE-SIDEBAR':
      return { isSidebarVisible: false };
    case 'SHOW-SIDEBAR':
      return { isSidebarVisible: true };
    default:
      return state;
  }
};

export default counterReducer;
