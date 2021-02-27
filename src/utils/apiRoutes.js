export const HOME = "/";
export const LIFESTYLE = "/lifestyle";
export const TRAVEL = "/travel";
export const FASHION = "/fashion";
export const GALLERY = "/gallery";
export const CONTACT = "/contact";

export const CATEGORY_PATHS = [LIFESTYLE, TRAVEL, FASHION, GALLERY];
export const POST_PATHS = CATEGORY_PATHS.map((path) => path + "/:id");

export const API_PATH = "https://dev.to/api/articles";

export const GET_ALL_POSTS = `${API_PATH}`;
