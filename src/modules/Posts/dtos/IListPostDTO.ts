interface IListPostDTO {
  id: string;
  user_id: string;
  content: string;
  created_at: Date;
  updated_at: Date;
  user: string;
  avatar: string;
}

export { IListPostDTO };
