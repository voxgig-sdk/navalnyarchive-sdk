<?php
declare(strict_types=1);

// Navalnyarchive SDK configuration

class NavalnyarchiveConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Navalnyarchive",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
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
              'active' => true,
              'name' => 'author',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'content',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'date',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'source',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'title',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'url',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
          ],
          'name' => 'daily_post',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
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
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
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
