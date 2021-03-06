const initialState = {
  allPosts: [],
  popularPosts: [],
};

function postsReducer(state = initialState, action) {
  if (action.type === "Set all posts") {
    return { ...state, allPosts: action.allPosts };
  }
  if (action.type === "Set popular posts") {
    return { ...state, popularPosts: action.popularPosts };
  }
  return state;
}

export default postsReducer;
