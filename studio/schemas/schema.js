import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import { userSchema } from './userSchema';
import { conversationsSchema } from './conservationsSchema';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([userSchema, conversationsSchema]),
})