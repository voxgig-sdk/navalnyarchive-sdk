
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'Navalnyarchive',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://api-archive.navalny.com/api/v1",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      daily_post: {
      },

    }
  }


  entity = {
    "daily_post": {
      "fields": [
        {
          "name": "author",
          "type": "`$STRING`"
        },
        {
          "name": "content",
          "type": "`$STRING`"
        },
        {
          "name": "date",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "source",
          "type": "`$STRING`"
        },
        {
          "name": "title",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "type": "`$STRING`"
        }
      ],
      "name": "daily_post",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/ru/daily-posts/today/",
              "parts": [
                "ru",
                "daily-posts",
                "today"
              ],
              "select": {
                "$action": "today"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.posts`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

