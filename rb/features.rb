# Navalnyarchive SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module NavalnyarchiveFeatures
  def self.make_feature(name)
    case name
    when "base"
      NavalnyarchiveBaseFeature.new
    when "ratelimit"
      NavalnyarchiveRatelimitFeature.new
    when "retry"
      NavalnyarchiveRetryFeature.new
    when "test"
      NavalnyarchiveTestFeature.new
    when "timeout"
      NavalnyarchiveTimeoutFeature.new
    else
      NavalnyarchiveBaseFeature.new
    end
  end
end
