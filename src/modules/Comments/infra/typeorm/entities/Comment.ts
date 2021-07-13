import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";

import { Post } from "@modules/Posts/infra/typeorm/entities/Post";
import { User } from "@modules/Users/infra/typeorm/entities/User";

@Entity("comments")
class Comment {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public content: string;

  @Column()
  public post_id: string;

  @ManyToOne(() => Post)
  @JoinColumn({ name: "post_id" })
  public post: Post;

  public user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  public user: User;

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}

export { Comment };
