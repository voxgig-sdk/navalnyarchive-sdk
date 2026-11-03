

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { NavalnyarchiveSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('DailyPostEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NAVALNYARCHIVE_TEST_LIVE=TRUE.
  afterEach(liveDelay('NAVALNYARCHIVE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NavalnyarchiveSDK.test()
    const ent = testsdk.DailyPost()
    assert(null != ent)
  })




  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NAVALNYARCHIVE_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'daily_post.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"daily_post","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /ru/daily-posts/today/","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/ru/daily-posts/today/","q":{"$action":"today"},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"ru"},{"lit":"daily-posts"},{"lit":"today"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"daily_post","name__orig":"daily_post","Name":"DailyPost","name_":"daily_post","name-":"daily-post","NAME":"DAILY_POST","index$":0}, {"active":true,"entity":"daily_post","key$":"BasicDailyPostFlow","kind":"basic","name":"BasicDailyPostFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"daily_post_ref01","srcdatavar":"daily_post_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-daily_post_ref01"}}],"index$":0}]}, 'DailyPost', {"GET /ru/daily-posts/today/":{"protocol":"http","parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let daily_post_ref01_data = Object.values(setup.data.existing.daily_post)[0] as any

    // LOAD
    const daily_post_ref01_ent = client.DailyPost()
    const daily_post_ref01_match_dt0: any = {}
    const daily_post_ref01_data_dt0 = (await daily_post_ref01_ent.load(daily_post_ref01_match_dt0)).data()
    assert(null != daily_post_ref01_data_dt0)


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/daily_post/DailyPostTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = NavalnyarchiveSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['daily_post01','daily_post02','daily_post03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NAVALNYARCHIVE_TEST_DAILY_POST_ENTID': idmap,
    'NAVALNYARCHIVE_TEST_LIVE': 'FALSE',
    'NAVALNYARCHIVE_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['NAVALNYARCHIVE_TEST_DAILY_POST_ENTID']

  const live = 'TRUE' === env.NAVALNYARCHIVE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NAVALNYARCHIVE_TEST_DAILY_POST_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new NavalnyarchiveSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.NAVALNYARCHIVE_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
