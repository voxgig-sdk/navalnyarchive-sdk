
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { NavalnyarchiveSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = NavalnyarchiveSDK.test()
    equal(testsdk instanceof NavalnyarchiveSDK, true,
      'NavalnyarchiveSDK.test() must return a client synchronously')
  })

})
