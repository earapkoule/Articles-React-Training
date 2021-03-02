const initialState = {
  popularPosts: [],
};

function popularPostsReducer(state = initialState, action) {
  if (action.type === "Set popular posts") {
    // console.log("Set popular posts", action.popularPosts);
    return { ...state, popularPosts: action.popularPosts };
  }
  return state;
}

export default popularPostsReducer;
