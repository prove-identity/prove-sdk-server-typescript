# @prove-identity/prove-api

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
</div>

<!-- Start SDK Installation [installation] -->
## SDK Installation

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

### [v3](docs/sdks/v3/README.md)

* [v3TokenRequest](docs/sdks/v3/README.md#v3tokenrequest) - Request OAuth token.
* [v3ChallengeRequest](docs/sdks/v3/README.md#v3challengerequest) - Submit challenge.
* [v3CompleteRequest](docs/sdks/v3/README.md#v3completerequest) - Complete flow.
* [v3StartRequest](docs/sdks/v3/README.md#v3startrequest) - Start flow.
* [v3ValidateRequest](docs/sdks/v3/README.md#v3validaterequest) - Validate phone number.
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400,500          | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { Proveapi } from "@prove-identity/prove-api";
import { SDKValidationError } from "@prove-identity/prove-api/models/errors";

const proveapi = new Proveapi();

async function run() {
    let result;
    try {
        result = await proveapi.v3.v3TokenRequest({
            clientId: "customer_id",
            clientSecret: "secret",
            grantType: "client_credentials",
        });
    } catch (err) {
        switch (true) {
            case err instanceof SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            case err instanceof errors.ErrorT: {
                console.error(err); // handle exception
                return;
            }
            default: {
                throw err;
            }
        }
    }

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Name

You can override the default server globally by passing a server name to the `server` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the names associated with the available servers:

| Name | Server | Variables |
| ----- | ------ | --------- |
| `uat-us` | `https://platform.uat.proveapis.com` | None |
| `prod-us` | `https://platform.proveapis.com` | None |

```typescript
import { Proveapi } from "@prove-identity/prove-api";

const proveapi = new Proveapi({
    server: "prod-us",
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

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

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

This SDK supports the following security schemes globally:

| Name           | Type           | Scheme         |
| -------------- | -------------- | -------------- |
| `clientID`     | oauth2         | OAuth2 token   |
| `clientSecret` | oauth2         | OAuth2 token   |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. The selected scheme will be used by default to authenticate with the API for all operations that support it. For example:
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

<!-- Placeholder for Future Speakeasy SDK Sections -->

