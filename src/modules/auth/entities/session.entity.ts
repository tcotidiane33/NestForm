import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { Exclude, instanceToPlain } from 'class-transformer';
import { IsEmail, IsInt, IsOptional, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Session {
  @IsInt()
  @Column()
  id : number;

  @IsEmail()
  @Column({})
  email : string;

  @IsString()
  @Column({ nullable: true})
  startDate : Date;

  @IsString()
  @Column({ nullable: true })
  endDate : Date;

  @IsString()
  @Column({ nullable: true })
  lastAccess : Date;


}
