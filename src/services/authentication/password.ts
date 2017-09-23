import * as bcrypt from 'bcrypt';

import logger from '@/utilities/logger';

const SALT_ROUNDS = 11;

/**
 * Hash a password and return a promise resolving to the hash
 *
 * @param password {string} Password to hash
 */
export function hashPassword(password: string) {
  const hashPromise = bcrypt.hash(password, SALT_ROUNDS);
  hashPromise.catch(reason => logger.error(reason));

  return hashPromise;
}

/**
 * Check a password to see if it matches the provided hash
 *
 * @param password {string} Password to compare to hash
 * @param hash {string} Hash to compare to password
 */
export function checkPassword(password: string, hash: string) {
  const checkPromise = bcrypt.compare(password, hash);
  checkPromise.catch(reason => logger.error(reason));

  return checkPromise;
}