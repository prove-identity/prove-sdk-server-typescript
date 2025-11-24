# AuthStartResponse

## Example Usage

```typescript
import { AuthStartResponse } from "@prove-identity/prove-api/models/components";

let value: AuthStartResponse = {
  authId: "713189b8-5555-4b08-83ba-75d08780aebd",
  authToken: "eyJhbGciOi...",
  pushTokens: [
    {
      deviceId: "eba12f3a-5555-47bc-b85d-21c0cbc4b973",
      platform: "web",
      pushToken: "eba12f3a-5555-47bc-b85d-21c0cbc4b973",
      registrationTimestamp: 1666394795,
    },
    {
      deviceId: "eba12f3a-5555-47bc-b85d-21c0cbc4b973",
      platform: "web",
      pushToken: "eba12f3a-5555-47bc-b85d-21c0cbc4b973",
      registrationTimestamp: 1666394795,
    },
  ],
  universalRedirectUrl: "prove.com?token=<authToken>",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          | Example                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `authId`                                                                                                                             | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | AuthID is the unique ID of the auth flow. To complete the auth flow, the `authId` will also be used for the<br/>AuthFinish request.  | 713189b8-5555-4b08-83ba-75d08780aebd                                                                                                 |
| `authToken`                                                                                                                          | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | AuthToken is a bearer token for use by the Prove Auth SDK.                                                                           | eyJhbGciOi...                                                                                                                        |
| `pushTokens`                                                                                                                         | [components.PushToken](../../models/components/pushtoken.md)[]                                                                       | :heavy_minus_sign:                                                                                                                   | PushTokens is an array of Push Tokens for the customer to use to initiate push notifications via their own service.                  |                                                                                                                                      |
| `universalRedirectUrl`                                                                                                               | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | UniversalRedirectURL is a Prove hosted endpoint for Universal Prove Key. URL query string also includes session authToken parameter. | prove.com?token=<authToken>                                                                                                          |