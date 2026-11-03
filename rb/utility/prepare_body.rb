# Navalnyarchive SDK utility: prepare_body
require_relative 'media'
module NavalnyarchiveUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return NavalnyarchiveUtilities.raw_body(ctx.reqdata) if NavalnyarchiveUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
