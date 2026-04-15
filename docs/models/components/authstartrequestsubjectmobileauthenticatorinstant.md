# AuthStartRequestSubjectMobileAuthenticatorInstant

## Example Usage

```typescript
import { AuthStartRequestSubjectMobileAuthenticatorInstant } from "@prove-identity/prove-api/models/components";

let value: AuthStartRequestSubjectMobileAuthenticatorInstant = {
  consent: {
    collectedTimestamp: "2022-02-17T00:00:00Z",
    description: "Customer Application Name",
    status: "optedIn",
    transactionId: "eba12f3a-5555-47bc-b85d-21c0cbc4b973",
  },
  testMode: "testMode",
};
```

## Fields

| Field                                                                                                                                                                      | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                | Example                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `consent`                                                                                                                                                                  | [components.AuthStartRequestInstantAuthConsent](../../models/components/authstartrequestinstantauthconsent.md)                                                             | :heavy_minus_sign:                                                                                                                                                         | N/A                                                                                                                                                                        | {<br/>"collectedTimestamp": "2022-02-17T00:00:00Z",<br/>"description": "Customer Application Name",<br/>"transactionId": "eba12f3a-5555-47bc-b85d-21c0cbc4b973",<br/>"status": "optedIn"<br/>} |
| `testMode`                                                                                                                                                                 | *string*                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                         | N/A                                                                                                                                                                        |                                                                                                                                                                            |