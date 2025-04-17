import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { Exclude, instanceToPlain } from 'class-transformer';
import { IsEmail, IsInt, IsOptional, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @IsInt()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @IsString({ message: `le name est obligatoire`})
  @Column()
  name: string;

  @IsEmail()
  @Column({ unique: true })
  email: string;

  @Exclude({ toPlainOnly: true})
  @ApiHideProperty()
  @IsOptional()
  @IsString()
  @Column( {nullable: true})
  password: string;


  toJSON () {
    return instanceToPlain(this)
  }
}
