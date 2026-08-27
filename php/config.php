<?php
declare(strict_types=1);

// Navalnyarchive SDK configuration

class NavalnyarchiveConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Navalnyarchive",
                "slug" => "navalnyarchive",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://api-archive.navalny.com/api/v1",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "daily_post" => [],
                ],
            ],
            "entity" => [
        'daily_post' => [
          'fields' => [
            [
              'name' => 'author',
              'short' => 'Author of the post',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'content',
              'short' => 'Content of the post',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'date',
              'short' => 'Publication date of the post',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique identifier for the post',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'source',
              'short' => 'Source platform (blog, social media, etc.)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'title',
              'short' => 'Title of the post',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'url',
              'short' => 'Original URL of the post',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'daily_post',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/ru/daily-posts/today/',
                  'parts' => [
                    'ru',
                    'daily-posts',
                    'today',
                  ],
                  'select' => [
                    '$action' => 'today',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.posts`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return NavalnyarchiveFeatures::make_feature($name);
    }
}
