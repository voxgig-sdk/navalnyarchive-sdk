# Navalnyarchive SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Navalnyarchive",
            "slug": "navalnyarchive",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "https://api-archive.navalny.com/api/v1",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "daily_post": {},
            },
        },
        "entity": {
      "daily_post": {
        "fields": [
          {
            "name": "author",
            "short": "Author of the post",
            "type": "`$STRING`",
          },
          {
            "name": "content",
            "short": "Content of the post",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "date",
            "short": "Publication date of the post",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "Unique identifier for the post",
            "type": "`$STRING`",
          },
          {
            "name": "source",
            "short": "Source platform (blog, social media, etc.)",
            "type": "`$STRING`",
          },
          {
            "name": "title",
            "short": "Title of the post",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "url",
            "short": "Original URL of the post",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
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
                    "lit": "ru",
                  },
                  {
                    "lit": "daily-posts",
                  },
                  {
                    "lit": "today",
                  },
                ],
                "select": {
                  "$action": "today",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.posts`",
                },
                "parts": [
                  "ru",
                  "daily-posts",
                  "today",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
