import { IsEmail, IsInt, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @IsInt()
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Column()
  name: string;

  @IsEmail()
  @Column({ unique: true })
  email: string;

  @IsString()
  @Column()
  password: string;
}
