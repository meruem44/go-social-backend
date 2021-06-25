import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("contacts")
class Contacts {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public user_id: string;

  @Column()
  public whatssap: string;

  @Column()
  public telegram: string;

  @Column()
  public instagram: string;

  @Column()
  public facebook: string;

  @Column()
  public linkedin: string;

  @Column()
  public link: string;

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}

export { Contacts };
