"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'Navalnyarchive',
        slug: "navalnyarchive",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        test: {
            "options": {
                "active": false
            },
            "transport": "base"
        },
    };
    options = {
        base: "https://api-archive.navalny.com/api/v1",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            daily_post: {},
        }
    };
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
                    "format": "date-time",
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
                    "format": "uri",
                    "name": "url",
                    "short": "Original URL of the post",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
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
                            "segments": [
                                {
                                    "lit": "ru"
                                },
                                {
                                    "lit": "daily-posts"
                                },
                                {
                                    "lit": "today"
                                }
                            ],
                            "select": {
                                "$action": "today"
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.posts`"
                            },
                            "parts": [
                                "ru",
                                "daily-posts",
                                "today"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map