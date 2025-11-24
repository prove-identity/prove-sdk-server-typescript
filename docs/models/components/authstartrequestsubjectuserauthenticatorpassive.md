# AuthStartRequestSubjectUserAuthenticatorPassive

## Example Usage

```typescript
import { AuthStartRequestSubjectUserAuthenticatorPassive } from "@prove-identity/prove-api/models/components";

let value: AuthStartRequestSubjectUserAuthenticatorPassive = {
  userVerificationLevel: "userVerificationLevel",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `userVerificationLevel`                                                                                                        | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | UserVerificationLevel accepts 'required', 'preferred' or 'discouraged' as a value to specify biometric verification with FIDO. |