export function setPopularPosts(popularPosts) {
  return { type: "Set popular posts", popularPosts };
}

export function getPopularPosts(tag) {
  return async (dispatch) => {
    const urlSafe = new URL("https://dev.to/api/articles");
    const params = { top: "" };
    if (tag) params.tag = tag;
    urlSafe.search = new URLSearchParams(params).toString();

    // setTimeout(async () => {
    const response = await fetch(urlSafe);
    const responseJson = await response.json();
    dispatch(setPopularPosts(responseJson));
    // }, 1000);
  };
}
