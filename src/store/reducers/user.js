import Constants from "../constants";

const initialState = {
  isLogin: false,
  isError: false,
  isSuccess: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
