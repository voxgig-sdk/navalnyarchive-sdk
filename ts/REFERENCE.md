# Navalnyarchive TypeScript SDK Reference

Complete API reference for the Navalnyarchive TypeScript SDK.


## NavalnyarchiveSDK

### Constructor

```ts
new NavalnyarchiveSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `NavalnyarchiveSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = NavalnyarchiveSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `NavalnyarchiveSDK` instance in test mode.


### Instance Methods

#### `DailyPost(data?: object)`

Create a new `DailyPost` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DailyPostEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `NavalnyarchiveSDK.test()`.

**Returns:** `NavalnyarchiveSDK` instance in test mode.


---

## DailyPostEntity

```ts
const daily_post = client.DailyPost()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `string` | No | Author of the post |
| `content` | `string` | No | Content of the post |
| `date` | `string` | No | Publication date of the post |
| `id` | `string` | No | Unique identifier for the post |
| `source` | `string` | No | Source platform (blog, social media, etc.) |
| `title` | `string` | No | Title of the post |
| `url` | `string` | No | Original URL of the post |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `today` | `/ru/daily-posts/today/` | `client.DailyPost().list({ $action: 'today', ... })` |

An action returns that action's OWN response, which is not necessarily a
DailyPost record — check the API definition for its shape.

```ts
const result = await client.DailyPost().list({
  $action: 'today',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DailyPost().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DailyPostEntity` instance with the same client and
options.

#### `client()`

Return the parent `NavalnyarchiveSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new NavalnyarchiveSDK({
  feature: {
    test: { active: true },
  }
})
```

