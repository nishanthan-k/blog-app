import { restbaseurl } from "./constants";

const authUrls = {
  signUp: `${restbaseurl}/auth/signup`,
  login: `${restbaseurl}/auth/login`,
};

const blogUrls = {
  fetchBlogs: `${restbaseurl}/blog/latest`,
};

export { blogUrls, authUrls };
