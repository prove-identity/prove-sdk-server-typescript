# V3DeactivateIdentityResponse

Response body for the V3 Deactivate Identity API.

## Example Usage

```typescript
import { V3DeactivateIdentityResponse } from "@prove-identity/prove-api/models/components";

let value: V3DeactivateIdentityResponse = {
  success: true,
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       | Example                                           |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `success`                                         | *boolean*                                         | :heavy_check_mark:                                | If true, the deactivate operation was successful. | true                                              |