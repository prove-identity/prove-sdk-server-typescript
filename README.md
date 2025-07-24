# @prove-identity/prove-api

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
</div>

<!-- Start Summary [summary] -->
## Summary

Prove APIs: This specification describes the Prove API.

OpenAPI Spec - generated.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [@prove-identity/prove-api](#prove-identityprove-api)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Authentication](#authentication)
  * [Retries](#retries)
  * [Standalone functions](#standalone-functions)
  * [Debugging](#debugging)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @prove-identity/prove-api
```

### PNPM

```bash
pnpm add @prove-identity/prove-api
```

### Bun

```bash
bun add @prove-identity/prove-api
```

### Yarn

```bash
yarn add @prove-identity/prove-api zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- No SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { ProveAPI } from "@prove-identity/prove-api";

async function run() {
    // Get OAuth credentials from environment variables.
    const oauthClientId = process.env.PROVE_CLIENT_ID;
    const oauthClientSecret = process.env.PROVE_CLIENT_SECRET;

    const proveEnv = "uat-us" // Use UAT in US region.

    // Create client for the Prove API.
    const sdk = new ProveAPI({
        server: proveEnv,
        security: {
            clientID: oauthClientId,
            clientSecret: oauthClientSecret,
        },
    });

    let startReq = {
        flowType: req.body.flowtype,
        finalTargetUrl: 'https://example.com',
        phoneNumber: req.body.mobilenumber,
    }

    // Send the start request.
    const rspStart = await sdk.v3.v3StartRequest(startReq);
    if (!rspStart) {
        console.error("Start error.")
        return
    }

    // Store the correlation ID.
    // correlationId = rspStart.v3StartResponse.correlationId;

    // Return the authToken back to the client SDK.
    // let authToken = rspStart.v3StartResponse.authToken;


    let reqBody = {
        correlationId: correlationId,
    }

    // Wait for the client to return.

    // Send the validate request.
    const rspValidate = await sdk.v3.v3ValidateRequest(reqBody);
    if (!rspValidate) {
        console.error("Start SDK error.")
        return
    }

    // If challenge is the next endpoint, return the user information.
    if (next && 'v3-challenge' in next) {
        const rspChallenge = await sdk.v3.v3ChallengeRequest({
            correlationId: correlationId,
        })
        if (!rspChallenge) {
            console.error("Challenge error.")
            return
        }

        // Return the user information to the client.
        // let individual = rspChallenge.v3ChallengeResponse.individual;
    }

    // Verify the user information.
    const rspComplete = await sdk.v3.v3CompleteRequest({
        correlationId: correlationId,
        individual: {
            firstName: 'Tod',
            lastName: 'Weedall',
            addresses: [{
                address: '39 South Trail',
                city: 'San Antonio',
                region: 'TX',
                postalCode: '78285',
            }],
            dob: '1984-12-10',
            emailAddresses: [
                'tweedalld@ehow.com',
            ],
            ssn: '565228370',
        },
    });
    if (!rspComplete) {
        console.error("Complete error.")
        return
    }
}

run();
```

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [identity](docs/sdks/identity/README.md)

* [v3BatchGetIdentities](docs/sdks/identity/README.md#v3batchgetidentities) - Batch Get Identities
* [v3EnrollIdentity](docs/sdks/identity/README.md#v3enrollidentity) - Enroll Identity
* [v3BatchEnrollIdentities](docs/sdks/identity/README.md#v3batchenrollidentities) - Batch Enroll Identities
* [v3DisenrollIdentity](docs/sdks/identity/README.md#v3disenrollidentity) - Disenroll Identity
* [v3GetIdentity](docs/sdks/identity/README.md#v3getidentity) - Get Identity
* [v3ActivateIdentity](docs/sdks/identity/README.md#v3activateidentity) - Activate Identity
* [v3DeactivateIdentity](docs/sdks/identity/README.md#v3deactivateidentity) - Deactivate Identity
* [v3GetIdentitiesByPhoneNumber](docs/sdks/identity/README.md#v3getidentitiesbyphonenumber) - Get Identities By Phone Number


### [v3](docs/sdks/v3/README.md)

* [v3TokenRequest](docs/sdks/v3/README.md#v3tokenrequest) - Request OAuth Token
* [v3ChallengeRequest](docs/sdks/v3/README.md#v3challengerequest) - Submit Challenge
* [v3CompleteRequest](docs/sdks/v3/README.md#v3completerequest) - Complete Flow
* [v3StartRequest](docs/sdks/v3/README.md#v3startrequest) - Start Flow
* [v3UnifyRequest](docs/sdks/v3/README.md#v3unifyrequest) - Initiate Possession Check
* [v3UnifyBindRequest](docs/sdks/v3/README.md#v3unifybindrequest) - Bind Prove Key
* [v3UnifyStatusRequest](docs/sdks/v3/README.md#v3unifystatusrequest) - Check Status
* [v3ValidateRequest](docs/sdks/v3/README.md#v3validaterequest) - Validate Phone Number
* [v3VerifyRequest](docs/sdks/v3/README.md#v3verifyrequest) - Initiate Verified Users Session
* [v3VerifyStatusRequest](docs/sdks/v3/README.md#v3verifystatusrequest) - Check Verification Result

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`ProveapiError`](./src/models/errors/proveapierror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property                  | Type       | Description                                                                             |
| ------------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`           | `string`   | Error message                                                                           |
| `error.httpMeta.response` | `Response` | HTTP response. Access to headers and more.                                              |
| `error.httpMeta.request`  | `Request`  | HTTP request. Access to headers and more.                                               |
| `error.data$`             |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { Proveapi } from "@prove-identity/prove-api";
import * as errors from "@prove-identity/prove-api/models/errors";

const proveapi = new Proveapi();

async function run() {
  try {
    const result = await proveapi.v3.v3TokenRequest({
      clientId: "customer_id",
      clientSecret: "secret",
      grantType: "client_credentials",
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.ProveapiError) {
      console.log(error.message);
      console.log(error.httpMeta.response.status);
      console.log(error.httpMeta.response.headers);
      console.log(error.httpMeta.request);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.Error400) {
        console.log(error.data$.code); // number
        console.log(error.data$.message); // string
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`ProveapiError`](./src/models/errors/proveapierror.ts): The base class for HTTP error responses.
  * [`Error400`](./src/models/errors/error400.ts): Bad Request. The server cannot process the request due to a client error. Status code `400`.
  * [`Error401`](./src/models/errors/error401.ts): Unauthorized. Authentication is required and has failed or has not been provided. Status code `401`.
  * [`ErrorT`](./src/models/errors/errort.ts): Internal Server Error. The server encountered an unexpected condition that prevented it from fulfilling the request. Status code `500`.
  * [`Error403`](./src/models/errors/error403.ts): Forbidden. The server understood the request but refuses to authorize it. Status code `403`. *

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`ProveapiError`](./src/models/errors/proveapierror.ts)**:
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Name

You can override the default server globally by passing a server name to the `server: keyof typeof ServerList` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the names associated with the available servers:

| Name      | Server                                  | Description        |
| --------- | --------------------------------------- | ------------------ |
| `uat-us`  | `https://platform.uat.proveapis.com`    | UAT for US Region  |
| `prod-us` | `https://platform.proveapis.com`        | Prod for US Region |
| `uat-eu`  | `https://platform.uat.eu.proveapis.com` | UAT for EU Region  |
| `prod-eu` | `https://platform.eu.proveapis.com`     | Prod for EU Region |

#### Example

```typescript
import { Proveapi } from "@prove-identity/prove-api";

const proveapi = new Proveapi({
  server: "prod-eu",
});

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

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Proveapi } from "@prove-identity/prove-api";

const proveapi = new Proveapi({
  serverURL: "https://platform.uat.proveapis.com",
});

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
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Proveapi } from "@prove-identity/prove-api";
import { HTTPClient } from "@prove-identity/prove-api/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Proveapi({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name                          | Type   | Scheme                         |
| ----------------------------- | ------ | ------------------------------ |
| `clientID`<br/>`clientSecret` | oauth2 | OAuth2 Client Credentials Flow |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Proveapi } from "@prove-identity/prove-api";

const proveapi = new Proveapi({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

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
<!-- End Authentication [security] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Proveapi } from "@prove-identity/prove-api";

const proveapi = new Proveapi();

async function run() {
  const result = await proveapi.v3.v3TokenRequest({
    clientId: "customer_id",
    clientSecret: "secret",
    grantType: "client_credentials",
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Proveapi } from "@prove-identity/prove-api";

const proveapi = new Proveapi({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
});

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
<!-- End Retries [retries] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`identityV3ActivateIdentity`](docs/sdks/identity/README.md#v3activateidentity) - Activate Identity
- [`identityV3BatchEnrollIdentities`](docs/sdks/identity/README.md#v3batchenrollidentities) - Batch Enroll Identities
- [`identityV3BatchGetIdentities`](docs/sdks/identity/README.md#v3batchgetidentities) - Batch Get Identities
- [`identityV3DeactivateIdentity`](docs/sdks/identity/README.md#v3deactivateidentity) - Deactivate Identity
- [`identityV3DisenrollIdentity`](docs/sdks/identity/README.md#v3disenrollidentity) - Disenroll Identity
- [`identityV3EnrollIdentity`](docs/sdks/identity/README.md#v3enrollidentity) - Enroll Identity
- [`identityV3GetIdentitiesByPhoneNumber`](docs/sdks/identity/README.md#v3getidentitiesbyphonenumber) - Get Identities By Phone Number
- [`identityV3GetIdentity`](docs/sdks/identity/README.md#v3getidentity) - Get Identity
- [`v3V3ChallengeRequest`](docs/sdks/v3/README.md#v3challengerequest) - Submit Challenge
- [`v3V3CompleteRequest`](docs/sdks/v3/README.md#v3completerequest) - Complete Flow
- [`v3V3StartRequest`](docs/sdks/v3/README.md#v3startrequest) - Start Flow
- [`v3V3TokenRequest`](docs/sdks/v3/README.md#v3tokenrequest) - Request OAuth Token
- [`v3V3UnifyBindRequest`](docs/sdks/v3/README.md#v3unifybindrequest) - Bind Prove Key
- [`v3V3UnifyRequest`](docs/sdks/v3/README.md#v3unifyrequest) - Initiate Possession Check
- [`v3V3UnifyStatusRequest`](docs/sdks/v3/README.md#v3unifystatusrequest) - Check Status
- [`v3V3ValidateRequest`](docs/sdks/v3/README.md#v3validaterequest) - Validate Phone Number
- [`v3V3VerifyRequest`](docs/sdks/v3/README.md#v3verifyrequest) - Initiate Verified Users Session
- [`v3V3VerifyStatusRequest`](docs/sdks/v3/README.md#v3verifystatusrequest) - Check Verification Result

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Proveapi } from "@prove-identity/prove-api";

const sdk = new Proveapi({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

