# V3
(*v3*)

## Overview

### Available Operations

* [v3TokenRequest](#v3tokenrequest) - Request OAuth Token
* [v3ChallengeRequest](#v3challengerequest) - Submit Challenge
* [v3CompleteRequest](#v3completerequest) - Complete Flow
* [v3StartRequest](#v3startrequest) - Start Flow
* [v3UnifyRequest](#v3unifyrequest) - Initiate Possession Check
* [v3UnifyBindRequest](#v3unifybindrequest) - Bind Prove Key
* [v3UnifyStatusRequest](#v3unifystatusrequest) - Check Status
* [v3ValidateRequest](#v3validaterequest) - Validate Phone Number
* [v3VerifyRequest](#v3verifyrequest) - Initiate Verified Users Session
* [v3VerifyStatusRequest](#v3verifystatusrequest) - Check Verification Result

## v3TokenRequest

This endpoint allows you to request an OAuth token.

### Example Usage

```typescript
import { Proveapi } from "@prove-identity/prove-api";

const proveapi = new Proveapi();

async function run() {
  const result = await proveapi.v3.v3TokenRequest({
    clientId: "customer_id",
    clientSecret: "secret",
    grantType: "client_credentials",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProveapiCore } from "@prove-identity/prove-api/core.js";
import { v3V3TokenRequest } from "@prove-identity/prove-api/funcs/v3V3TokenRequest.js";

// Use `ProveapiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const proveapi = new ProveapiCore();

async function run() {
  const res = await v3V3TokenRequest(proveapi, {
    clientId: "customer_id",
    clientSecret: "secret",
    grantType: "client_credentials",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("v3V3TokenRequest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V3TokenRequest](../../models/components/v3tokenrequest.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3TokenRequestResponse](../../models/operations/v3tokenrequestresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.Error401  | 401              | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## v3ChallengeRequest

This endpoint allows you to submit challenge information.

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
  const result = await proveapi.v3.v3ChallengeRequest({
    correlationId: "713189b8-5555-4b08-83ba-75d08780aebd",
    dob: "1981-01",
    ssn: "0596",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProveapiCore } from "@prove-identity/prove-api/core.js";
import { v3V3ChallengeRequest } from "@prove-identity/prove-api/funcs/v3V3ChallengeRequest.js";

// Use `ProveapiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const proveapi = new ProveapiCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await v3V3ChallengeRequest(proveapi, {
    correlationId: "713189b8-5555-4b08-83ba-75d08780aebd",
    dob: "1981-01",
    ssn: "0596",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("v3V3ChallengeRequest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V3ChallengeRequest](../../models/components/v3challengerequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3ChallengeRequestResponse](../../models/operations/v3challengerequestresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.Error401  | 401              | application/json |
| errors.Error403  | 403              | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## v3CompleteRequest

This endpoint allows you to verify the user and complete the flow.

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
  const result = await proveapi.v3.v3CompleteRequest({
    correlationId: "713189b8-5555-4b08-83ba-75d08780aebd",
    individual: {
      addresses: [
        {
          address: "39 South Trail",
          city: "San Antonio",
          extendedAddress: "Apt 23",
          postalCode: "78285",
          region: "TX",
        },
      ],
      dob: "1981-01",
      emailAddresses: [
        "jdoe@example.com",
      ],
      firstName: "Tod",
      lastName: "Weedall",
      ssn: "265228370",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProveapiCore } from "@prove-identity/prove-api/core.js";
import { v3V3CompleteRequest } from "@prove-identity/prove-api/funcs/v3V3CompleteRequest.js";

// Use `ProveapiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const proveapi = new ProveapiCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await v3V3CompleteRequest(proveapi, {
    correlationId: "713189b8-5555-4b08-83ba-75d08780aebd",
    individual: {
      addresses: [
        {
          address: "39 South Trail",
          city: "San Antonio",
          extendedAddress: "Apt 23",
          postalCode: "78285",
          region: "TX",
        },
      ],
      dob: "1981-01",
      emailAddresses: [
        "jdoe@example.com",
      ],
      firstName: "Tod",
      lastName: "Weedall",
      ssn: "265228370",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("v3V3CompleteRequest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V3CompleteRequest](../../models/components/v3completerequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3CompleteRequestResponse](../../models/operations/v3completerequestresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.Error401  | 401              | application/json |
| errors.Error403  | 403              | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## v3StartRequest

This endpoint allows you to start the solution flow.

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
  const result = await proveapi.v3.v3StartRequest({
    allowOTPRetry: true,
    dob: "1981-01",
    emailAddress: "mpinsonm@dyndns.org",
    finalTargetUrl: "https://www.example.com/landing-page",
    flowType: "mobile",
    ipAddress: "10.0.0.1",
    phoneNumber: "2001001695",
    smsMessage: "#### is your temporary code to continue your application. Caution: for your security, don't share this code with anyone.",
    ssn: "0596",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProveapiCore } from "@prove-identity/prove-api/core.js";
import { v3V3StartRequest } from "@prove-identity/prove-api/funcs/v3V3StartRequest.js";

// Use `ProveapiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const proveapi = new ProveapiCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await v3V3StartRequest(proveapi, {
    allowOTPRetry: true,
    dob: "1981-01",
    emailAddress: "mpinsonm@dyndns.org",
    finalTargetUrl: "https://www.example.com/landing-page",
    flowType: "mobile",
    ipAddress: "10.0.0.1",
    phoneNumber: "2001001695",
    smsMessage: "#### is your temporary code to continue your application. Caution: for your security, don't share this code with anyone.",
    ssn: "0596",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("v3V3StartRequest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V3StartRequest](../../models/components/v3startrequest.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3StartRequestResponse](../../models/operations/v3startrequestresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.Error401  | 401              | application/json |
| errors.Error403  | 403              | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## v3UnifyRequest

This endpoint allows you to initiate the possession check.

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
  const result = await proveapi.v3.v3UnifyRequest({
    allowOTPRetry: true,
    checkReputation: true,
    clientCustomerId: "e0f78bc2-f748-4eda-9d29-d756844507fc",
    clientRequestId: "71010d88-d0e7-4a24-9297-d1be6fefde81",
    finalTargetUrl: "https://www.example.com/landing-page",
    phoneNumber: "2001004011",
    possessionType: "mobile",
    rebind: true,
    smsMessage: "#### is your verification code.",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProveapiCore } from "@prove-identity/prove-api/core.js";
import { v3V3UnifyRequest } from "@prove-identity/prove-api/funcs/v3V3UnifyRequest.js";

// Use `ProveapiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const proveapi = new ProveapiCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await v3V3UnifyRequest(proveapi, {
    allowOTPRetry: true,
    checkReputation: true,
    clientCustomerId: "e0f78bc2-f748-4eda-9d29-d756844507fc",
    clientRequestId: "71010d88-d0e7-4a24-9297-d1be6fefde81",
    finalTargetUrl: "https://www.example.com/landing-page",
    phoneNumber: "2001004011",
    possessionType: "mobile",
    rebind: true,
    smsMessage: "#### is your verification code.",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("v3V3UnifyRequest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V3UnifyRequest](../../models/components/v3unifyrequest.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3UnifyRequestResponse](../../models/operations/v3unifyrequestresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.Error401  | 401              | application/json |
| errors.Error403  | 403              | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## v3UnifyBindRequest

This endpoint allows you to bind a Prove Key to a phone number of a Unify session and get the possession result.

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
  const result = await proveapi.v3.v3UnifyBindRequest({
    clientRequestId: "71010d88-d0e7-4a24-9297-d1be6fefde81",
    correlationId: "713189b8-5555-4b08-83ba-75d08780aebd",
    phoneNumber: "2001004011",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProveapiCore } from "@prove-identity/prove-api/core.js";
import { v3V3UnifyBindRequest } from "@prove-identity/prove-api/funcs/v3V3UnifyBindRequest.js";

// Use `ProveapiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const proveapi = new ProveapiCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await v3V3UnifyBindRequest(proveapi, {
    clientRequestId: "71010d88-d0e7-4a24-9297-d1be6fefde81",
    correlationId: "713189b8-5555-4b08-83ba-75d08780aebd",
    phoneNumber: "2001004011",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("v3V3UnifyBindRequest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V3UnifyBindRequest](../../models/components/v3unifybindrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3UnifyBindRequestResponse](../../models/operations/v3unifybindrequestresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.Error401  | 401              | application/json |
| errors.Error403  | 403              | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## v3UnifyStatusRequest

This endpoint allows you to check the status of a Unify session and get the possession result.

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
  const result = await proveapi.v3.v3UnifyStatusRequest({
    clientRequestId: "71010d88-d0e7-4a24-9297-d1be6fefde81",
    correlationId: "713189b8-5555-4b08-83ba-75d08780aebd",
    phoneNumber: "2001004011",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProveapiCore } from "@prove-identity/prove-api/core.js";
import { v3V3UnifyStatusRequest } from "@prove-identity/prove-api/funcs/v3V3UnifyStatusRequest.js";

// Use `ProveapiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const proveapi = new ProveapiCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await v3V3UnifyStatusRequest(proveapi, {
    clientRequestId: "71010d88-d0e7-4a24-9297-d1be6fefde81",
    correlationId: "713189b8-5555-4b08-83ba-75d08780aebd",
    phoneNumber: "2001004011",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("v3V3UnifyStatusRequest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V3UnifyStatusRequest](../../models/components/v3unifystatusrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3UnifyStatusRequestResponse](../../models/operations/v3unifystatusrequestresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.Error401  | 401              | application/json |
| errors.Error403  | 403              | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## v3ValidateRequest

This endpoint allows you to check if the phone number entered/discovered earlier in the flow is validated.

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
  const result = await proveapi.v3.v3ValidateRequest({
    correlationId: "713189b8-5555-4b08-83ba-75d08780aebd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProveapiCore } from "@prove-identity/prove-api/core.js";
import { v3V3ValidateRequest } from "@prove-identity/prove-api/funcs/v3V3ValidateRequest.js";

// Use `ProveapiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const proveapi = new ProveapiCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await v3V3ValidateRequest(proveapi, {
    correlationId: "713189b8-5555-4b08-83ba-75d08780aebd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("v3V3ValidateRequest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V3ValidateRequest](../../models/components/v3validaterequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3ValidateRequestResponse](../../models/operations/v3validaterequestresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.Error401  | 401              | application/json |
| errors.Error403  | 403              | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## v3VerifyRequest

This endpoint allows you to initiate a Verified Users session.

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
  const result = await proveapi.v3.v3VerifyRequest({
    allowOTPRetry: true,
    clientCustomerId: "e0f78bc2-f748-4eda-9d29-d756844507fc",
    clientRequestId: "71010d88-d0e7-4a24-9297-d1be6fefde81",
    emailAddress: "sbutrimovichb@who.int",
    finalTargetUrl: "https://www.example.com/landing-page",
    firstName: "Sheilakathryn",
    lastName: "Butrimovich",
    phoneNumber: "2001004011",
    possessionType: "mobile",
    smsMessage: "#### is your temporary code to continue your application. Caution: for your security, don't share this code with anyone.",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProveapiCore } from "@prove-identity/prove-api/core.js";
import { v3V3VerifyRequest } from "@prove-identity/prove-api/funcs/v3V3VerifyRequest.js";

// Use `ProveapiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const proveapi = new ProveapiCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await v3V3VerifyRequest(proveapi, {
    allowOTPRetry: true,
    clientCustomerId: "e0f78bc2-f748-4eda-9d29-d756844507fc",
    clientRequestId: "71010d88-d0e7-4a24-9297-d1be6fefde81",
    emailAddress: "sbutrimovichb@who.int",
    finalTargetUrl: "https://www.example.com/landing-page",
    firstName: "Sheilakathryn",
    lastName: "Butrimovich",
    phoneNumber: "2001004011",
    possessionType: "mobile",
    smsMessage: "#### is your temporary code to continue your application. Caution: for your security, don't share this code with anyone.",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("v3V3VerifyRequest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V3VerifyRequest](../../models/components/v3verifyrequest.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3VerifyRequestResponse](../../models/operations/v3verifyrequestresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.Error401  | 401              | application/json |
| errors.Error403  | 403              | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## v3VerifyStatusRequest

This endpoint allows you to perform the necessary checks for a Verified Users session.

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
  const result = await proveapi.v3.v3VerifyStatusRequest({
    clientRequestId: "71010d88-d0e7-4a24-9297-d1be6fefde81",
    correlationId: "713189b8-5555-4b08-83ba-75d08780aebd",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProveapiCore } from "@prove-identity/prove-api/core.js";
import { v3V3VerifyStatusRequest } from "@prove-identity/prove-api/funcs/v3V3VerifyStatusRequest.js";

// Use `ProveapiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const proveapi = new ProveapiCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await v3V3VerifyStatusRequest(proveapi, {
    clientRequestId: "71010d88-d0e7-4a24-9297-d1be6fefde81",
    correlationId: "713189b8-5555-4b08-83ba-75d08780aebd",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("v3V3VerifyStatusRequest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.V3VerifyStatusRequest](../../models/components/v3verifystatusrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.V3VerifyStatusRequestResponse](../../models/operations/v3verifystatusrequestresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400              | application/json |
| errors.Error401  | 401              | application/json |
| errors.Error403  | 403              | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |