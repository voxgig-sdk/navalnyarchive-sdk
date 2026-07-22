
import { Context } from './Context'


class NavalnyarchiveError extends Error {

  isNavalnyarchiveError = true

  sdk = 'Navalnyarchive'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  NavalnyarchiveError
}

