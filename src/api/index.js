import { custom_axios } from "../axios";

export class PostsApi {
  static async getPosts() {
    const res = await custom_axios.get("/api/posts/");
    console.log(res.data);
    return res.data;
  }
}
