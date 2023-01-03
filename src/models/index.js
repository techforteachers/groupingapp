// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Student } = initSchema(schema);

export {
  Student
};