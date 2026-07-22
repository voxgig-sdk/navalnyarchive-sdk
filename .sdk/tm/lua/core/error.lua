-- Navalnyarchive SDK error

local NavalnyarchiveError = {}
NavalnyarchiveError.__index = NavalnyarchiveError


function NavalnyarchiveError.new(code, msg, ctx)
  local self = setmetatable({}, NavalnyarchiveError)
  self.is_sdk_error = true
  self.sdk = "Navalnyarchive"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function NavalnyarchiveError:error()
  return self.msg
end


function NavalnyarchiveError:__tostring()
  return self.msg
end


return NavalnyarchiveError
