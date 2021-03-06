export function getAllPosts() {
  return async (dispatch) => {
    const urlSafe = new URL("https://dev.to/api/articles");
    const response = await fetch(urlSafe);
    const responseJson = await response.json();
    dispatch(setAllPosts(responseJson));
  };
}

export function setAllPosts(allPosts) {
  return { type: "Set all posts", allPosts };
}

export function getPopularPosts(tag) {
  return async (dispatch) => {
    const urlSafe = new URL("https://dev.to/api/articles");
    const params = { top: "" };
    if (tag) params.tag = tag;
    urlSafe.search = new URLSearchParams(params).toString();

    const response = await fetch(urlSafe);
    const responseJson = await response.json();
    dispatch(setPopularPosts(responseJson));
  };
}

export function setPopularPosts(popularPosts) {
  return { type: "Set popular posts", popularPosts };
}

export async function getPostById(id) {
  const urlSafe = new URL(`https://dev.to/api/articles/${id}`);
  const response = await fetch(urlSafe);
  const responseJson = await response.json();
  return responseJson;
}

export async function createPost(postObject) {
  const requestOptions = {
    method: "POST",
    headers: {
      "api-key": "PX4cLpwBFHQ1BbAQycY1htf8",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postObject),
  };
  const response = await fetch("https://dev.to/api/articles/", requestOptions);
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error("Something went wrong");
  }
}
