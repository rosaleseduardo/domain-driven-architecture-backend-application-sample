import type { Interfaces } from '../../../domain';

/**
 * This is the contract that is going to be signed off in the infrastructure
 * layer in order to provide a valid implementation of the 'User' Entity
 * to the required resource
 */
export interface Crud {
  save: (user: Interfaces.User) => Promise<void>;
  recordPreExists: (email: string) => Promise<boolean>;
}
