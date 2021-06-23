import { User } from "@modules/Users/infra/typeorm/entities/User";
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";

@Entity("posts")
class Post {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column("uuid")
  public user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  public user: User;

  @Column("uuid")
  public content: string;

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}

export { Post };
