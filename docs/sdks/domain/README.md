# Domain
(*domain*)

## Overview

### Available Operations

* [v3DomainID](#v3domainid) - Get Domain Details
* [v3DomainLink](#v3domainlink) - # Create a request to connect the requested domain to the domain the request is made from.
* [v3DomainLinked](#v3domainlinked) - Get the list of domains that are linked to this domain.
* [v3DomainUnlink](#v3domainunlink) - # Remove a domain link or request.

## v3DomainID

Returns the domain details.

### Example Usage

```typescript
import { Proveapi } from "@prove-identity/prove-api";

const proveapi = new Proveapi({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await proveapi.domain.v3DomainID();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProveapiCore } from "@prove-identity/prove-api/core.js";
import { domainV3DomainID } from "@prove-identity/prove-api/funcs/domainV3DomainID.js";

// Use `ProveapiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const proveapi = new ProveapiCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await domainV3DomainID(proveapi);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainV3DomainID failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [string](../../models/.md)                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3DomainIDResponse](../../models/operations/v3domainidresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.Error401  | 401              | application/json |
| errors.Error403  | 403              | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## v3DomainLink

# Create a request to connect the requested domain to the domain the request is made from.

### Example Usage

```typescript
import { Proveapi } from "@prove-identity/prove-api";

const proveapi = new Proveapi({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await proveapi.domain.v3DomainLink({
    pcid: "pcid",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProveapiCore } from "@prove-identity/prove-api/core.js";
import { domainV3DomainLink } from "@prove-identity/prove-api/funcs/domainV3DomainLink.js";

// Use `ProveapiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const proveapi = new ProveapiCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await domainV3DomainLink(proveapi, {
    pcid: "pcid",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainV3DomainLink failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V3DomainLinkRequest](../../models/components/v3domainlinkrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3DomainLinkResponse](../../models/operations/v3domainlinkresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.Error401  | 401              | application/json |
| errors.Error403  | 403              | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## v3DomainLinked

Returns the accepted and pending links for this domain.

### Example Usage

```typescript
import { Proveapi } from "@prove-identity/prove-api";

const proveapi = new Proveapi({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await proveapi.domain.v3DomainLinked();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProveapiCore } from "@prove-identity/prove-api/core.js";
import { domainV3DomainLinked } from "@prove-identity/prove-api/funcs/domainV3DomainLinked.js";

// Use `ProveapiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const proveapi = new ProveapiCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await domainV3DomainLinked(proveapi);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainV3DomainLinked failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3DomainLinkedResponse](../../models/operations/v3domainlinkedresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.Error401  | 401              | application/json |
| errors.Error403  | 403              | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## v3DomainUnlink

# Remove a domain link or request.

### Example Usage

```typescript
import { Proveapi } from "@prove-identity/prove-api";

const proveapi = new Proveapi({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await proveapi.domain.v3DomainUnlink({
    pcidFrom: "pcidFrom",
    pcidTo: "pcidTo",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProveapiCore } from "@prove-identity/prove-api/core.js";
import { domainV3DomainUnlink } from "@prove-identity/prove-api/funcs/domainV3DomainUnlink.js";

// Use `ProveapiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const proveapi = new ProveapiCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await domainV3DomainUnlink(proveapi, {
    pcidFrom: "pcidFrom",
    pcidTo: "pcidTo",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("domainV3DomainUnlink failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V3DomainUnlinkRequest](../../models/components/v3domainunlinkrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3DomainUnlinkResponse](../../models/operations/v3domainunlinkresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.Error401  | 401              | application/json |
| errors.Error403  | 403              | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |