# V3DomainIDResponse

## Example Usage

```typescript
import { V3DomainIDResponse } from "@prove-identity/prove-api/models/components";

let value: V3DomainIDResponse = {
  issuerId: "issuerId",
  name: "My Company",
  pcid: "123456",
};
```

## Fields

| Field                  | Type                   | Required               | Description            | Example                |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `issuerId`             | *string*               | :heavy_check_mark:     | Issuer ID              |                        |
| `name`                 | *string*               | :heavy_check_mark:     | Customer friendly name | My Company             |
| `pcid`                 | *string*               | :heavy_check_mark:     | Customer ID            | 123456                 |