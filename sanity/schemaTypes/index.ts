import { type SchemaTypeDefinition } from 'sanity'
import {newsType} from './newsType'
import {fundraiserType} from './fundraiserType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [newsType, fundraiserType],
}
