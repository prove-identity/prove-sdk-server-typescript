# AuthStartRequestSubjectDevice

## Example Usage

```typescript
import { AuthStartRequestSubjectDevice } from "@prove-identity/prove-api/models/components";

let value: AuthStartRequestSubjectDevice = {
  authenticators: {
    passive: {
      allowPasscodeFallback: true,
      userVerificationLevel: "userVerificationLevel",
    },
  },
  claim: {
    deviceId: "deviceId",
  },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      | Example                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `authenticators`                                                                                                                 | [components.AuthStartRequestSubjectDeviceAuthenticators](../../models/components/authstartrequestsubjectdeviceauthenticators.md) | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              | {<br/>"passive": {<br/>"allowPasscodeFallback": true,<br/>"userVerificationLevel": "userVerificationLevel"<br/>}<br/>}           |
| `claim`                                                                                                                          | [components.AuthStartRequestSubjectDeviceClaim](../../models/components/authstartrequestsubjectdeviceclaim.md)                   | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              | {<br/>"deviceId": "deviceId"<br/>}                                                                                               |