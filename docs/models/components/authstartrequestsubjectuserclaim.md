# AuthStartRequestSubjectUserClaim

## Example Usage

```typescript
import { AuthStartRequestSubjectUserClaim } from "@prove-identity/prove-api/models/components";

let value: AuthStartRequestSubjectUserClaim = {
  provided: true,
  userId: "eba12f3a-5555-47bc-b85d-21c0cbc4b973",
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                | Example                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `provided`                                                                                                                                                 | *boolean*                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                         | Provided if true, registers the user ID with a device, otherwise it valids the user ID.                                                                    |                                                                                                                                                            |
| `userId`                                                                                                                                                   | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | UserID is a user identifier generated on the customer side to be associated with a device.<br/>Acceptable characters are: alphanumeric with symbols '-._+=/:'. | eba12f3a-5555-47bc-b85d-21c0cbc4b973                                                                                                                       |