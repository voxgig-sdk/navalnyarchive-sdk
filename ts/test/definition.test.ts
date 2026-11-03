import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "daily_post",
    "accessor": "DailyPost",
    "op": "load",
    "method": "GET",
    "path": "/ru/daily-posts/today/",
    "action": "today",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "date": "2026-11-03",
      "editorial": {
        "id": 1,
        "slug": "x",
        "name": "x",
        "preview_image": "x",
        "description": "x",
        "quote": "x",
        "created_at": "2026-01-01T00:00:00Z",
        "updated_at": "2026-01-01T00:00:00Z",
        "sections": [
          {
            "type": "x",
            "text": "x",
            "url": "x",
            "author": "x",
            "description": "x",
            "material_id": 1,
            "entities": []
          }
        ],
        "tags": [],
        "people": [],
        "places": [],
        "related_materials": []
      },
      "material": {
        "kind": "twitter_day",
        "date_published": "2026-01-01"
      }
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
