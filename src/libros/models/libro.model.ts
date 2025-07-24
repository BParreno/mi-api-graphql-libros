import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Libro {
  @Field(() => ID)
  id: string;

  @Field()
  titulo: string;

  @Field()
  autor: string;
}