# AuthenticationResults

## Example Usage

```typescript
import { AuthenticationResults } from "@prove-identity/prove-api/models/components";

let value: AuthenticationResults = {
  keySource: "otp",
  mobile: "mobileauth",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `keySource`                                                                          | *string*                                                                             | :heavy_minus_sign:                                                                   | An indication of the last authentication method used when the Prove Key was created. | otp                                                                                  |
| `mobile`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | An indication of which mobile authentication method was used.                        | mobileauth                                                                           |