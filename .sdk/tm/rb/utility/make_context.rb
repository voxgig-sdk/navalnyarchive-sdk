# Navalnyarchive SDK utility: make_context
require_relative '../core/context'
module NavalnyarchiveUtilities
  MakeContext = ->(ctxmap, basectx) {
    NavalnyarchiveContext.new(ctxmap, basectx)
  }
end
