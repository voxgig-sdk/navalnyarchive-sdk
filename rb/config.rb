# Navalnyarchive SDK configuration

module NavalnyarchiveConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "Navalnyarchive",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://api-archive.navalny.com/api/v1",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "daily_post" => {},
        },
      },
      "entity" => {
        "daily_post" => {
          "fields" => [
            {
              "name" => "author",
              "type" => "`$STRING`",
            },
            {
              "name" => "content",
              "type" => "`$STRING`",
            },
            {
              "name" => "date",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "type" => "`$STRING`",
            },
            {
              "name" => "source",
              "type" => "`$STRING`",
            },
            {
              "name" => "title",
              "type" => "`$STRING`",
            },
            {
              "name" => "url",
              "type" => "`$STRING`",
            },
          ],
          "name" => "daily_post",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/ru/daily-posts/today/",
                  "parts" => [
                    "ru",
                    "daily-posts",
                    "today",
                  ],
                  "select" => {
                    "$action" => "today",
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.posts`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    NavalnyarchiveFeatures.make_feature(name)
  end
end
