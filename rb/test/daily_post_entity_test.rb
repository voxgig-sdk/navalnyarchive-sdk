# DailyPost entity test

require "minitest/autorun"
require "json"
require_relative "../Navalnyarchive_sdk"
require_relative "runner"

class DailyPostEntityTest < Minitest::Test
  # main.kit.test.live.strict is true (the default is true): a live
  # request that fails, or a live test missing an input it needs,
  # fails the test.
  # An account with no record for a test to read skips it either way.
  LIVE_STRICT = true

  def test_create_instance
    testsdk = NavalnyarchiveSDK.test(nil, nil)
    ent = testsdk.DailyPost(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = daily_post_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "daily_post." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    daily_post_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.daily_post")))
    daily_post_ref01_data = nil
    if daily_post_ref01_data_raw.length > 0
      daily_post_ref01_data = Helpers.to_map(daily_post_ref01_data_raw[0][1])
    end

    # LOAD
    daily_post_ref01_ent = client.DailyPost(nil)
    daily_post_ref01_match_dt0 = {}
    daily_post_ref01_data_dt0_loaded = daily_post_ref01_ent.load(daily_post_ref01_match_dt0, nil)
    assert !daily_post_ref01_data_dt0_loaded.nil?

  end
end

def daily_post_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "daily_post", "DailyPostTestData.json")
  entity_data_source = File.read(entity_data_file, encoding: "UTF-8")
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = NavalnyarchiveSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["daily_post01", "daily_post02", "daily_post03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Whether *_ENTID supplied the idmap, read before env_override consumes
  # it: without it, the ids a live flow binds are the fixture's synthetic ones.
  entid_env_raw = ENV["NAVALNYARCHIVE_TEST_DAILY_POST_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "NAVALNYARCHIVE_TEST_DAILY_POST_ENTID" => idmap,
    "NAVALNYARCHIVE_TEST_LIVE" => "FALSE",
    "NAVALNYARCHIVE_TEST_EXPLAIN" => "FALSE",
  })

  idmap_resolved = Helpers.to_map(
    env["NAVALNYARCHIVE_TEST_DAILY_POST_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["NAVALNYARCHIVE_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      # FIRST, so the generated fields below win: sdk-test-control.json's
      # test.client.options adds to the live client, it does not redirect it.
      Runner.live_client_options,
      {
      },
      extra || {},
    ])
    client = NavalnyarchiveSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["NAVALNYARCHIVE_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["NAVALNYARCHIVE_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
