# AuthStartRequestSubjectCardAuthenticatorAirKeyClaim

## Example Usage

```typescript
import { AuthStartRequestSubjectCardAuthenticatorAirKeyClaim } from "@prove-identity/prove-api/models/components";

let value: AuthStartRequestSubjectCardAuthenticatorAirKeyClaim = {
  puids: [
    "puids",
    "puids",
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `puids`                                                                | *string*[]                                                             | :heavy_minus_sign:                                                     | Optional comma-separated list of PUIDs associated with the cardholder. |