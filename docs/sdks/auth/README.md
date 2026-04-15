# Auth
(*auth*)

## Overview

### Available Operations

* [authContinueRequest](#authcontinuerequest) - AuthContinue /v1/server/auth/continue
* [authFinishRequest](#authfinishrequest) - AuthFinish /v1/server/auth/finish
* [authStartRequest](#authstartrequest) - AuthStart /v1/server/auth/start

## authContinueRequest

If the initial Prove Auth authenticators fail, the Force Bind authenticator can be used which permits using another
authentication method to verify a mobile number (like Prove Instant Link™). Once the mobile number is verified, send
this AuthContinue request.

Production URL: https://oapi.prove-auth.proveapis.com/v1/server/auth/continue

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
  const result = await proveapi.auth.authContinueRequest({
    authId: "713189b8-5555-4b08-83ba-75d08780aebd",
    requestId: "eba12f3a-5555-47bc-b85d-21c0cbc4b973",
    subjects: {
      mobile: {
        claim: {
          mobileNumber: "12065550100",
        },
      },
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
import { authAuthContinueRequest } from "@prove-identity/prove-api/funcs/authAuthContinueRequest.js";

// Use `ProveapiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const proveapi = new ProveapiCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await authAuthContinueRequest(proveapi, {
    authId: "713189b8-5555-4b08-83ba-75d08780aebd",
    requestId: "eba12f3a-5555-47bc-b85d-21c0cbc4b973",
    subjects: {
      mobile: {
        claim: {
          mobileNumber: "12065550100",
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("authAuthContinueRequest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.AuthContinueRequest](../../models/components/authcontinuerequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AuthContinueRequestResponse](../../models/operations/authcontinuerequestresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Error400  | 400              | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## authFinishRequest

To complete the auth flow and get the authentication result, send this AuthFinish request.

Production URL: https://oapi.prove-auth.proveapis.com/v1/server/auth/finish

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
  const result = await proveapi.auth.authFinishRequest({
    authId: "eba12f3a-5555-47bc-b85d-21c0cbc4b973",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ProveapiCore } from "@prove-identity/prove-api/core.js";
import { authAuthFinishRequest } from "@prove-identity/prove-api/funcs/authAuthFinishRequest.js";

// Use `ProveapiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const proveapi = new ProveapiCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await authAuthFinishRequest(proveapi, {
    authId: "eba12f3a-5555-47bc-b85d-21c0cbc4b973",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("authAuthFinishRequest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.AuthFinishRequest](../../models/components/authfinishrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AuthFinishRequestResponse](../../models/operations/authfinishrequestresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Error400  | 400              | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## authStartRequest

To start an auth flow, send this AuthStart request to control how Prove Auth will authenticate the end users and
their devices. The expected authenticators should be included in the body parameters. There are many supported
scenarios to use Prove Auth so each of the request types are explained in the "Server Integration Guide".

Production URL: https://oapi.prove-auth.proveapis.com/v1/server/auth/start

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
  const result = await proveapi.auth.authStartRequest({
    callbackUrl: "https://example.com/webhook",
    delivery: {
      push: {
        notification: {
          body: "Do you want to allow login from this device?",
          confirmBtn: "Confirm",
          denyBtn: "Deny",
          originatingDevice: "iPhone12",
          originatingIp: "198.51.100.10",
          title: "Confirm Login",
        },
      },
      scan: {
        notification: {
          body: "Please confirm you are trying to sign in...",
          confirmBtn: "Confirm",
          denyBtn: "Deny",
          originatingDevice: "Google Chrome on Windows",
          originatingIp: "198.51.100.10",
          title: "Confirm Sign In",
        },
      },
    },
    requestId: "eba12f3a-5555-47bc-b85d-21c0cbc4b973",
    subjects: {
      card: {
        authenticators: {
          airKey: {
            claim: {
              puids: [
                "puids",
                "puids",
              ],
            },
            testMode: "testMode",
          },
        },
      },
      device: {
        authenticators: {
          passive: {
            allowPasscodeFallback: true,
            userVerificationLevel: "userVerificationLevel",
          },
        },
        claim: {
          deviceId: "deviceId",
        },
      },
      mobile: {
        authenticators: {
          instant: {
            consent: {
              collectedTimestamp: "2022-02-17T00:00:00Z",
              description: "Customer Application Name",
              status: "optedIn",
              transactionId: "eba12f3a-5555-47bc-b85d-21c0cbc4b973",
            },
            testMode: "testMode",
          },
          instantlink: {
            allowMobileNumberRePrompt: true,
            finalTargetUrl: "https://example.com/finishpage",
            messageText: "Please click the link to authenticate your mobile number: ####",
            sourceIp: "123...",
            subscriptionCustomerId: "123",
            testMode: "testMode",
          },
          otp: {
            allowMobileNumberRePrompt: true,
            allowOtpRetry: true,
            messageText: "Your pin is: ####",
            testMode: "testMode",
          },
          passive: {
            cacheResult: true,
            localDomain: true,
            maxAge: 7776000,
            testMode: "testMode",
          },
          universal: {
            finalTargetUrl: "https://example.com/finishpage",
            testMode: "testMode",
          },
        },
        claim: {
          mobileNumber: "12065550100",
        },
      },
      user: {
        authenticators: {
          docv: {},
          passive: {
            userVerificationLevel: "userVerificationLevel",
          },
          ppb: {},
          present: {},
        },
        claim: {
          provided: true,
          userId: "eba12f3a-5555-47bc-b85d-21c0cbc4b973",
        },
      },
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
import { authAuthStartRequest } from "@prove-identity/prove-api/funcs/authAuthStartRequest.js";

// Use `ProveapiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const proveapi = new ProveapiCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await authAuthStartRequest(proveapi, {
    callbackUrl: "https://example.com/webhook",
    delivery: {
      push: {
        notification: {
          body: "Do you want to allow login from this device?",
          confirmBtn: "Confirm",
          denyBtn: "Deny",
          originatingDevice: "iPhone12",
          originatingIp: "198.51.100.10",
          title: "Confirm Login",
        },
      },
      scan: {
        notification: {
          body: "Please confirm you are trying to sign in...",
          confirmBtn: "Confirm",
          denyBtn: "Deny",
          originatingDevice: "Google Chrome on Windows",
          originatingIp: "198.51.100.10",
          title: "Confirm Sign In",
        },
      },
    },
    requestId: "eba12f3a-5555-47bc-b85d-21c0cbc4b973",
    subjects: {
      card: {
        authenticators: {
          airKey: {
            claim: {
              puids: [
                "puids",
                "puids",
              ],
            },
            testMode: "testMode",
          },
        },
      },
      device: {
        authenticators: {
          passive: {
            allowPasscodeFallback: true,
            userVerificationLevel: "userVerificationLevel",
          },
        },
        claim: {
          deviceId: "deviceId",
        },
      },
      mobile: {
        authenticators: {
          instant: {
            consent: {
              collectedTimestamp: "2022-02-17T00:00:00Z",
              description: "Customer Application Name",
              status: "optedIn",
              transactionId: "eba12f3a-5555-47bc-b85d-21c0cbc4b973",
            },
            testMode: "testMode",
          },
          instantlink: {
            allowMobileNumberRePrompt: true,
            finalTargetUrl: "https://example.com/finishpage",
            messageText: "Please click the link to authenticate your mobile number: ####",
            sourceIp: "123...",
            subscriptionCustomerId: "123",
            testMode: "testMode",
          },
          otp: {
            allowMobileNumberRePrompt: true,
            allowOtpRetry: true,
            messageText: "Your pin is: ####",
            testMode: "testMode",
          },
          passive: {
            cacheResult: true,
            localDomain: true,
            maxAge: 7776000,
            testMode: "testMode",
          },
          universal: {
            finalTargetUrl: "https://example.com/finishpage",
            testMode: "testMode",
          },
        },
        claim: {
          mobileNumber: "12065550100",
        },
      },
      user: {
        authenticators: {
          docv: {},
          passive: {
            userVerificationLevel: "userVerificationLevel",
          },
          ppb: {},
          present: {},
        },
        claim: {
          provided: true,
          userId: "eba12f3a-5555-47bc-b85d-21c0cbc4b973",
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("authAuthStartRequest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.AuthStartRequest](../../models/components/authstartrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AuthStartRequestResponse](../../models/operations/authstartrequestresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Error400  | 400              | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |