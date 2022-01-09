const initialState = {
  reviewLoading: false
};

constReviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_APP_LOADING':
      return { ...state, reviewLoading: action.payload };
    default:
      return { ...state };
  }
};
export default ReviewReducer;
