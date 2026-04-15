# Result

## Example Usage

```typescript
import { Result } from "@prove-identity/prove-api/models/components";

let value: Result = {
  attributeId: "123e4567-e89b-12d3-a456-426614174000",
  issuerId: "\"prove\"",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `attributeId`                                            | *string*                                                 | :heavy_minus_sign:                                       | The unique ID for the attribute value.                   | 123e4567-e89b-12d3-a456-426614174000                     |
| `issuerId`                                               | *string*                                                 | :heavy_minus_sign:                                       | The human-readable name for the issuer of the attribute. | "prove"                                                  |