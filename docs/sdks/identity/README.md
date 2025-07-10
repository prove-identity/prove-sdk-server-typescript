# Identity
(*identity*)

## Overview

### Available Operations

* [v3BatchGetIdentities](#v3batchgetidentities) - Batch Get Identities
* [v3EnrollIdentity](#v3enrollidentity) - Enroll Identity
* [v3BatchEnrollIdentities](#v3batchenrollidentities) - Batch Enroll Identities
* [v3DisenrollIdentity](#v3disenrollidentity) - Disenroll Identity
* [v3GetIdentity](#v3getidentity) - Get Identity
* [v3ActivateIdentity](#v3activateidentity) - Activate Identity
* [v3DeactivateIdentity](#v3deactivateidentity) - Deactivate Identity
* [v3GetIdentitiesByPhoneNumber](#v3getidentitiesbyphonenumber) - Get Identities By Phone Number

## v3BatchGetIdentities

Return a list of all identities you have enrolled in Identity Manager.

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
  const result = await proveapi.identity.v3BatchGetIdentities();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProveapiCore } from "@prove-identity/prove-api/core.js";
import { identityV3BatchGetIdentities } from "@prove-identity/prove-api/funcs/identityV3BatchGetIdentities.js";

// Use `ProveapiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const proveapi = new ProveapiCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await identityV3BatchGetIdentities(proveapi);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("identityV3BatchGetIdentities failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `clientRequestId`                                                                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                           | A client-generated unique ID for a specific session. This can be used to identify specific requests. The format of this ID is defined by the client - Prove recommends using a GUID, but any format can be accepted. Do not include Personally Identifiable Information (PII) in this field. |
| `limit`                                                                                                                                                                                                                                                                                      | *number*                                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                           | The maximum number of identities to return per call. Default value is 100.                                                                                                                                                                                                                   |
| `startKey`                                                                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                           | The pagination token for the GET /v3/identity API. Use this to retrieve the next page of results after a previous call to GET /v3/identity. This token is returned as lastKey in the GET /v3/identity API response - pass it in directly as startKey to get the next page of results.        |
| `showInactive`                                                                                                                                                                                                                                                                               | *boolean*                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                           | Whether to show identities associated with the current client that are currently marked as inactive. Default value is false.                                                                                                                                                                 |
| `options`                                                                                                                                                                                                                                                                                    | RequestOptions                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                                               |
| `options.retries`                                                                                                                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                                                             |

### Response

**Promise\<[operations.V3BatchGetIdentitiesResponse](../../models/operations/v3batchgetidentitiesresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.Error401  | 401              | application/json |
| errors.Error403  | 403              | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## v3EnrollIdentity

Enrolls a single customer for monitoring using their phone number and unique identifier.

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
  const result = await proveapi.identity.v3EnrollIdentity({
    clientCustomerId: "e0f78bc2-f748-4eda-9d29-d756844507fc",
    clientRequestId: "71010d88-d0e7-4a24-9297-d1be6fefde81",
    deviceId: "bf9ea15d-7dfa-4bb4-a64c-6c26b53472fc",
    phoneNumber: "2001001695",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProveapiCore } from "@prove-identity/prove-api/core.js";
import { identityV3EnrollIdentity } from "@prove-identity/prove-api/funcs/identityV3EnrollIdentity.js";

// Use `ProveapiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const proveapi = new ProveapiCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await identityV3EnrollIdentity(proveapi, {
    clientCustomerId: "e0f78bc2-f748-4eda-9d29-d756844507fc",
    clientRequestId: "71010d88-d0e7-4a24-9297-d1be6fefde81",
    deviceId: "bf9ea15d-7dfa-4bb4-a64c-6c26b53472fc",
    phoneNumber: "2001001695",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("identityV3EnrollIdentity failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V3EnrollIdentityRequest](../../models/components/v3enrollidentityrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3EnrollIdentityResponse](../../models/operations/v3enrollidentityresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.Error401  | 401              | application/json |
| errors.Error403  | 403              | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## v3BatchEnrollIdentities

Enrolls multiple customers in a single request for efficient bulk operations (up to 100).

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
  const result = await proveapi.identity.v3BatchEnrollIdentities({
    clientRequestId: "71010d88-d0e7-4a24-9297-d1be6fefde81",
    items: [
      {
        clientCustomerId: "e0f78bc2-f748-4eda-9d29-d756844507fc",
        deviceId: "bf9ea15d-7dfa-4bb4-a64c-6c26b53472fc",
        phoneNumber: "2001001695",
      },
      {
        clientCustomerId: "e0f78bc2-f748-4eda-9d29-d756844507fc",
        deviceId: "bf9ea15d-7dfa-4bb4-a64c-6c26b53472fc",
        phoneNumber: "2001001695",
      },
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProveapiCore } from "@prove-identity/prove-api/core.js";
import { identityV3BatchEnrollIdentities } from "@prove-identity/prove-api/funcs/identityV3BatchEnrollIdentities.js";

// Use `ProveapiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const proveapi = new ProveapiCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await identityV3BatchEnrollIdentities(proveapi, {
    clientRequestId: "71010d88-d0e7-4a24-9297-d1be6fefde81",
    items: [
      {
        clientCustomerId: "e0f78bc2-f748-4eda-9d29-d756844507fc",
        deviceId: "bf9ea15d-7dfa-4bb4-a64c-6c26b53472fc",
        phoneNumber: "2001001695",
      },
      {
        clientCustomerId: "e0f78bc2-f748-4eda-9d29-d756844507fc",
        deviceId: "bf9ea15d-7dfa-4bb4-a64c-6c26b53472fc",
        phoneNumber: "2001001695",
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("identityV3BatchEnrollIdentities failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V3BatchEnrollIdentitiesRequest](../../models/components/v3batchenrollidentitiesrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3BatchEnrollIdentitiesResponse](../../models/operations/v3batchenrollidentitiesresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.Error401  | 401              | application/json |
| errors.Error403  | 403              | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## v3DisenrollIdentity

Disenrolls an identity from Identity Manager. If you wish to monitor in future, re-enrollment of that identity is required.

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
  const result = await proveapi.identity.v3DisenrollIdentity("<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProveapiCore } from "@prove-identity/prove-api/core.js";
import { identityV3DisenrollIdentity } from "@prove-identity/prove-api/funcs/identityV3DisenrollIdentity.js";

// Use `ProveapiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const proveapi = new ProveapiCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await identityV3DisenrollIdentity(proveapi, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("identityV3DisenrollIdentity failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `identityId`                                                                                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                                                                           | A Prove-generated unique ID for a specific identity.                                                                                                                                                                                                                                         |
| `clientRequestId`                                                                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                           | A client-generated unique ID for a specific session. This can be used to identify specific requests. The format of this ID is defined by the client - Prove recommends using a GUID, but any format can be accepted. Do not include Personally Identifiable Information (PII) in this field. |
| `options`                                                                                                                                                                                                                                                                                    | RequestOptions                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                                               |
| `options.retries`                                                                                                                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                                                             |

### Response

**Promise\<[operations.V3DisenrollIdentityResponse](../../models/operations/v3disenrollidentityresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.Error401  | 401              | application/json |
| errors.Error403  | 403              | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## v3GetIdentity

Return details of an identity given the identity ID.

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
  const result = await proveapi.identity.v3GetIdentity("<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProveapiCore } from "@prove-identity/prove-api/core.js";
import { identityV3GetIdentity } from "@prove-identity/prove-api/funcs/identityV3GetIdentity.js";

// Use `ProveapiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const proveapi = new ProveapiCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await identityV3GetIdentity(proveapi, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("identityV3GetIdentity failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `identityId`                                                                                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                                                                           | A unique Prove-generated identifier for the enrolled identity.                                                                                                                                                                                                                               |
| `clientRequestId`                                                                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                           | A client-generated unique ID for a specific session. This can be used to identify specific requests. The format of this ID is defined by the client - Prove recommends using a GUID, but any format can be accepted. Do not include Personally Identifiable Information (PII) in this field. |
| `options`                                                                                                                                                                                                                                                                                    | RequestOptions                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                                               |
| `options.retries`                                                                                                                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                                                             |

### Response

**Promise\<[operations.V3GetIdentityResponse](../../models/operations/v3getidentityresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.Error401  | 401              | application/json |
| errors.Error403  | 403              | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## v3ActivateIdentity

Sets an identity as active for monitoring.

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
  const result = await proveapi.identity.v3ActivateIdentity("<id>", {
    clientRequestId: "71010d88-d0e7-4a24-9297-d1be6fefde81",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProveapiCore } from "@prove-identity/prove-api/core.js";
import { identityV3ActivateIdentity } from "@prove-identity/prove-api/funcs/identityV3ActivateIdentity.js";

// Use `ProveapiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const proveapi = new ProveapiCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await identityV3ActivateIdentity(proveapi, "<id>", {
    clientRequestId: "71010d88-d0e7-4a24-9297-d1be6fefde81",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("identityV3ActivateIdentity failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `identityId`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | A Prove-generated unique ID for a specific identity.                                                                                                                           |                                                                                                                                                                                |
| `v3ActivateIdentityRequest`                                                                                                                                                    | [components.V3ActivateIdentityRequest](../../models/components/v3activateidentityrequest.md)                                                                                   | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.V3ActivateIdentityResponse](../../models/operations/v3activateidentityresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.Error401  | 401              | application/json |
| errors.Error403  | 403              | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## v3DeactivateIdentity

Stops webhook notifications without disenrolling the identity.

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
  const result = await proveapi.identity.v3DeactivateIdentity("<id>", {
    clientRequestId: "71010d88-d0e7-4a24-9297-d1be6fefde81",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProveapiCore } from "@prove-identity/prove-api/core.js";
import { identityV3DeactivateIdentity } from "@prove-identity/prove-api/funcs/identityV3DeactivateIdentity.js";

// Use `ProveapiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const proveapi = new ProveapiCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await identityV3DeactivateIdentity(proveapi, "<id>", {
    clientRequestId: "71010d88-d0e7-4a24-9297-d1be6fefde81",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("identityV3DeactivateIdentity failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `identityId`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | A Prove-generated unique ID for a specific identity.                                                                                                                           |                                                                                                                                                                                |
| `v3IdentityDeactivateRequest`                                                                                                                                                  | [components.V3IdentityDeactivateRequest](../../models/components/v3identitydeactivaterequest.md)                                                                               | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.V3DeactivateIdentityResponse](../../models/operations/v3deactivateidentityresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.Error401  | 401              | application/json |
| errors.Error403  | 403              | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## v3GetIdentitiesByPhoneNumber

Return list of all identities you have enrolled that are associated with this phone number.

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
  const result = await proveapi.identity.v3GetIdentitiesByPhoneNumber("<value>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProveapiCore } from "@prove-identity/prove-api/core.js";
import { identityV3GetIdentitiesByPhoneNumber } from "@prove-identity/prove-api/funcs/identityV3GetIdentitiesByPhoneNumber.js";

// Use `ProveapiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const proveapi = new ProveapiCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await identityV3GetIdentitiesByPhoneNumber(proveapi, "<value>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("identityV3GetIdentitiesByPhoneNumber failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mobileNumber`                                                                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                                                                           | The phone number to find identities for. US phone numbers can be passed in with or without a leading +1. Acceptable characters are: alphanumeric with symbols '+'.                                                                                                                           |
| `clientRequestId`                                                                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                           | A client-generated unique ID for a specific session. This can be used to identify specific requests. The format of this ID is defined by the client - Prove recommends using a GUID, but any format can be accepted. Do not include Personally Identifiable Information (PII) in this field. |
| `options`                                                                                                                                                                                                                                                                                    | RequestOptions                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                                               |
| `options.retries`                                                                                                                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                                                             |

### Response

**Promise\<[operations.V3GetIdentitiesByPhoneNumberResponse](../../models/operations/v3getidentitiesbyphonenumberresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.Error401  | 401              | application/json |
| errors.Error403  | 403              | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |