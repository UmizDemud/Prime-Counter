'use strict';

/**
 * Finds the prime numbers, that are less than the provided input.
 * @param {number} num
 *
 * @returns {number}
 */
function countPrimes(num) {
  const primes = {
    store: [2, 3],
    isPrime: (n) => {
      if (primes.store.includes(n)) {
        return true;
      }

      for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
          return false;
        }
      }
      primes.store.push(n);

      return true;
    },
    setup: (n) => {
      for (let i = 3; i <= n; i++) {
        primes.isPrime(i);
      }
    },
    _countPrimes: (n) => {
      primes.setup(n);

      return primes.store.reduce((acc, cur) => {
        if (cur < n) {
          return acc + 1;
        }

        return acc;
      }, 0);
    },
  };

  return primes._countPrimes(num);
}
