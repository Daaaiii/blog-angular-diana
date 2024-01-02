export class Post {
  id?: number;
  user: string;
  title: string;
  subtitle?: string;
  postContent: string;

  constructor(
    user: string,
    title: string,
    subtitle: string,
    postContent: string,
    id: number
  ) {
    this.user = user;
    this.title = title;
    this.subtitle = subtitle;
    this.postContent = postContent;
    this.id = id;
  }
}
