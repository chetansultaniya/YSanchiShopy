const {act} = require('react-test-renderer');

const initialState = {
  authToken: '123',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case '':
      return;
    default:
      return state;
  }
};

export default authReducer;
