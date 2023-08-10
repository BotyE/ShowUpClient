import  AuthStore  from './AuthStore';

/**
 * Root Store Class with
 */
export class Store {
  authStore: AuthStore;

  constructor() {
    this.authStore = new AuthStore();
  }

}