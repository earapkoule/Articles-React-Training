const initialState = {
  allPosts: [],
  popularPosts: [],
};

function postsReducer(state = initialState, action) {
  if (action.type === "Set all posts") {
    console.log("Set posts", action.allPosts);
    return { ...state, allPosts: action.allPosts };
  }
  if (action.type === "Set popular posts") {
    // console.log("Set popular posts", action.popularPosts);
    return { ...state, popularPosts: action.popularPosts };
  }
  return state;
}

export default postsReducer;
