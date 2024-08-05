import { BUSINESS_LOGIC } from './domain/logic/business';
import {
  BUSINESS_RULES_RESPONSES,
  COLLECTION,
  CRUD_RESPONSES,
  Repository,
  ROUTER,
} from './infrastructure';

export const USER_ENTITY = {
  COLLECTION,
  ROUTER,
  BUSINESS_LOGIC,
  REPOSITORY: Repository,
  RESPONSES: {
    ...BUSINESS_RULES_RESPONSES,
    CRUD_RESPONSES,
  },
};

export * from './domain/interfaces';
export * from './domain/logic';
