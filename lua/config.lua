-- Navalnyarchive SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Navalnyarchive",
      slug = "navalnyarchive",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://api-archive.navalny.com/api/v1",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["daily_post"] = {},
      },
    },
    entity = {
      ["daily_post"] = {
        ["fields"] = {
          {
            ["name"] = "author",
            ["short"] = "Author of the post",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "content",
            ["short"] = "Content of the post",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "date-time",
            ["name"] = "date",
            ["short"] = "Publication date of the post",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["short"] = "Unique identifier for the post",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "source",
            ["short"] = "Source platform (blog, social media, etc.)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "title",
            ["short"] = "Title of the post",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "uri",
            ["name"] = "url",
            ["short"] = "Original URL of the post",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "daily_post",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/ru/daily-posts/today/",
                ["segments"] = {
                  {
                    ["lit"] = "ru",
                  },
                  {
                    ["lit"] = "daily-posts",
                  },
                  {
                    ["lit"] = "today",
                  },
                },
                ["select"] = {
                  ["$action"] = "today",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.posts`",
                },
                ["parts"] = {
                  "ru",
                  "daily-posts",
                  "today",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
