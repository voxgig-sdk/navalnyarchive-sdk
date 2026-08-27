
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

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Navalnyarchive',
        slug: "navalnyarchive",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
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
          "short": "Author of the post",
          "type": "`$STRING`"
        },
        {
          "name": "content",
          "short": "Content of the post",
          "type": "`$STRING`"
        },
        {
          "name": "date",
          "short": "Publication date of the post",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "Unique identifier for the post",
          "type": "`$STRING`"
        },
        {
          "name": "source",
          "short": "Source platform (blog, social media, etc.)",
          "type": "`$STRING`"
        },
        {
          "name": "title",
          "short": "Title of the post",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "short": "Original URL of the post",
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

