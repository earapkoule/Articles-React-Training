const initialState = {
  allPosts: [],
  popularPosts: [],
  categoryPosts: [],
};

function postsReducer(state = initialState, action) {
  if (action.type === "Set all posts") {
    return { ...state, allPosts: action.allPosts };
  }
  if (action.type === "Set popular posts") {
    return { ...state, popularPosts: action.popularPosts };
  }
  if (action.type === "Set category posts") {
    return { ...state, categoryPosts: action.categoryPosts };
  }
  return state;
}

export default postsReducer;
