import { ADAPTERS } from './application/adapters';
import { USE_CASES } from './application/use-cases';
import { BUSINESS_LOGIC } from './domain/logic/business';
import { UserValidation } from './infrastructure/implementations/validations';
import {
  BUSINESS_RULES_RESPONSES,
  COLLECTION,
  CONTROLLERS,
  CRUD_RESPONSES,
  Repository,
  ROUTER,
} from './infrastructure';

export const USER_ENTITY = {
  ADAPTERS,
  USE_CASES,
  COLLECTION,
  ROUTER,
  BUSINESS_LOGIC,
  CONTROLLERS,
  REPOSITORY: Repository,
  RESPONSES: {
    ...BUSINESS_RULES_RESPONSES,
    CRUD_RESPONSES,
  },
  VALIDATION_CRITERIA: UserValidation,
};

export * from './domain/interfaces';
export * from './domain/logic';
