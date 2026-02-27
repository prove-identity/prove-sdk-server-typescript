# AuthStartRequestSubjectDeviceAuthenticatorPassive

## Example Usage

```typescript
import { AuthStartRequestSubjectDeviceAuthenticatorPassive } from "@prove-identity/prove-api/models/components";

let value: AuthStartRequestSubjectDeviceAuthenticatorPassive = {
  allowPasscodeFallback: true,
  userVerificationLevel: "userVerificationLevel",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `allowPasscodeFallback`                                                                                                        | *boolean*                                                                                                                      | :heavy_minus_sign:                                                                                                             | AllowPasscodeFallback specifies whether passcode is allowed as a fallback protection for device in-app step-up keys.           |
| `userVerificationLevel`                                                                                                        | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | UserVerificationLevel accepts 'required', 'preferred' or 'discouraged' as a value to specify biometric verification with FIDO. |