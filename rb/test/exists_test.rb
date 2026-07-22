# Navalnyarchive SDK exists test

require "minitest/autorun"
require_relative "../Navalnyarchive_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = NavalnyarchiveSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
