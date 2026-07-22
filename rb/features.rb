# Navalnyarchive SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module NavalnyarchiveFeatures
  def self.make_feature(name)
    case name
    when "base"
      NavalnyarchiveBaseFeature.new
    when "test"
      NavalnyarchiveTestFeature.new
    else
      NavalnyarchiveBaseFeature.new
    end
  end
end
