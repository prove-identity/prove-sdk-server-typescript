# AuthStartRequestSubjectMobileAuthenticators

## Example Usage

```typescript
import { AuthStartRequestSubjectMobileAuthenticators } from "@prove-identity/prove-api/models/components";

let value: AuthStartRequestSubjectMobileAuthenticators = {
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
    messageText:
      "Please click the link to authenticate your mobile number: ####",
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
};
```

## Fields

| Field                                                                                                                                                                                                                                                     | Type                                                                                                                                                                                                                                                      | Required                                                                                                                                                                                                                                                  | Description                                                                                                                                                                                                                                               | Example                                                                                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `instant`                                                                                                                                                                                                                                                 | [components.AuthStartRequestSubjectMobileAuthenticatorInstant](../../models/components/authstartrequestsubjectmobileauthenticatorinstant.md)                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                                                       | {<br/>"testMode": "testMode",<br/>"consent": {<br/>"collectedTimestamp": "2022-02-17T00:00:00Z",<br/>"description": "Customer Application Name",<br/>"transactionId": "eba12f3a-5555-47bc-b85d-21c0cbc4b973",<br/>"status": "optedIn"<br/>}<br/>}         |
| `instantlink`                                                                                                                                                                                                                                             | [components.AuthStartRequestSubjectMobileAuthenticatorInstantLink](../../models/components/authstartrequestsubjectmobileauthenticatorinstantlink.md)                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                                                       | {<br/>"subscriptionCustomerId": "123",<br/>"finalTargetUrl": "https://example.com/finishpage",<br/>"messageText": "Please click the link to authenticate your mobile number: ####",<br/>"sourceIp": "123...",<br/>"testMode": "testMode",<br/>"allowMobileNumberRePrompt": true<br/>} |
| `otp`                                                                                                                                                                                                                                                     | [components.AuthStartRequestSubjectMobileAuthenticatorOTP](../../models/components/authstartrequestsubjectmobileauthenticatorotp.md)                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                                                       | {<br/>"messageText": "Your pin is: ####",<br/>"testMode": "testMode",<br/>"allowMobileNumberRePrompt": true,<br/>"allowOtpRetry": true<br/>}                                                                                                              |
| `passive`                                                                                                                                                                                                                                                 | [components.AuthStartRequestSubjectMobileAuthenticatorPassive](../../models/components/authstartrequestsubjectmobileauthenticatorpassive.md)                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                                                       | {<br/>"cacheResult": true,<br/>"maxAge": 7776000,<br/>"testMode": "testMode",<br/>"localDomain": true<br/>}                                                                                                                                               |
| `universal`                                                                                                                                                                                                                                               | [components.AuthStartRequestSubjectMobileAuthenticatorUniversal](../../models/components/authstartrequestsubjectmobileauthenticatoruniversal.md)                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                                                       | {<br/>"finalTargetUrl": "https://example.com/finishpage",<br/>"testMode": "testMode"<br/>}                                                                                                                                                                |