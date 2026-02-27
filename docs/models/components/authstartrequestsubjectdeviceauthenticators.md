# AuthStartRequestSubjectDeviceAuthenticators

## Example Usage

```typescript
import { AuthStartRequestSubjectDeviceAuthenticators } from "@prove-identity/prove-api/models/components";

let value: AuthStartRequestSubjectDeviceAuthenticators = {
  passive: {
    allowPasscodeFallback: true,
    userVerificationLevel: "userVerificationLevel",
  },
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  | Example                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `passive`                                                                                                                                    | [components.AuthStartRequestSubjectDeviceAuthenticatorPassive](../../models/components/authstartrequestsubjectdeviceauthenticatorpassive.md) | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          | {<br/>"allowPasscodeFallback": true,<br/>"userVerificationLevel": "userVerificationLevel"<br/>}                                              |