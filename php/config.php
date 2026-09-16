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
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
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
              'format' => 'date-time',
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
              'format' => 'uri',
              'name' => 'url',
              'short' => 'Original URL of the post',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
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
                  'segments' => [
                    [
                      'lit' => 'ru',
                    ],
                    [
                      'lit' => 'daily-posts',
                    ],
                    [
                      'lit' => 'today',
                    ],
                  ],
                  'select' => [
                    '$action' => 'today',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.posts`',
                  ],
                  'parts' => [
                    'ru',
                    'daily-posts',
                    'today',
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
