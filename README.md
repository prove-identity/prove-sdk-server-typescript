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


### [v3](docs/sdks/v3/README.md)

* [v3TokenRequest](docs/sdks/v3/README.md#v3tokenrequest) - Request OAuth token.
* [v3ChallengeRequest](docs/sdks/v3/README.md#v3challengerequest) - Submit challenge.
* [v3CompleteRequest](docs/sdks/v3/README.md#v3completerequest) - Complete flow.
* [v3MFARequest](docs/sdks/v3/README.md#v3mfarequest) - Initiate possession check.
* [v3MFAStatusRequest](docs/sdks/v3/README.md#v3mfastatusrequest) - Check status of MFA session.
* [v3StartRequest](docs/sdks/v3/README.md#v3startrequest) - Start flow.
* [v3ValidateRequest](docs/sdks/v3/README.md#v3validaterequest) - Validate phone number.
* [v3VerifyRequest](docs/sdks/v3/README.md#v3verifyrequest) - Initiate verified users session.
* [v3VerifyStatusRequest](docs/sdks/v3/README.md#v3verifystatusrequest) - Perform checks for verified users session.

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `v3TokenRequest` method may throw the following errors:

| Error Type      | Status Code | Content Type     |
| --------------- | ----------- | ---------------- |
| errors.Error400 | 400         | application/json |
| errors.ErrorT   | 500         | application/json |
| errors.SDKError | 4XX, 5XX    | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `SDKError`.

```typescript
import { Proveapi } from "@prove-identity/prove-api";
import {
  Error400,
  ErrorT,
  SDKValidationError,
} from "@prove-identity/prove-api/models/errors";

const proveapi = new Proveapi();

async function run() {
  let result;
  try {
    result = await proveapi.v3.v3TokenRequest({
      clientId: "customer_id",
      clientSecret: "secret",
      grantType: "client_credentials",
    });

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError): {
        // Pretty-print will provide a human-readable multi-line error message
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof Error400): {
        // Handle err.data$: Error400Data
        console.error(err);
        return;
      }
      case (err instanceof ErrorT): {
        // Handle err.data$: ErrorTData
        console.error(err);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Name

You can override the default server globally by passing a server name to the `server: keyof typeof ServerList` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the names associated with the available servers:

| Name      | Server                                  |
| --------- | --------------------------------------- |
| `uat-us`  | `https://platform.uat.proveapis.com`    |
| `prod-us` | `https://platform.proveapis.com`        |
| `uat-eu`  | `https://platform.uat.eu.proveapis.com` |
| `prod-eu` | `https://platform.eu.proveapis.com`     |

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

  // Handle the result
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

  // Handle the result
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

  // Handle the result
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

  // Handle the result
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

  // Handle the result
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

- [`v3V3ChallengeRequest`](docs/sdks/v3/README.md#v3challengerequest) - Submit challenge.
- [`v3V3CompleteRequest`](docs/sdks/v3/README.md#v3completerequest) - Complete flow.
- [`v3V3MFARequest`](docs/sdks/v3/README.md#v3mfarequest) - Initiate possession check.
- [`v3V3MFAStatusRequest`](docs/sdks/v3/README.md#v3mfastatusrequest) - Check status of MFA session.
- [`v3V3StartRequest`](docs/sdks/v3/README.md#v3startrequest) - Start flow.
- [`v3V3TokenRequest`](docs/sdks/v3/README.md#v3tokenrequest) - Request OAuth token.
- [`v3V3ValidateRequest`](docs/sdks/v3/README.md#v3validaterequest) - Validate phone number.
- [`v3V3VerifyRequest`](docs/sdks/v3/README.md#v3verifyrequest) - Initiate verified users session.
- [`v3V3VerifyStatusRequest`](docs/sdks/v3/README.md#v3verifystatusrequest) - Perform checks for verified users session.

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

