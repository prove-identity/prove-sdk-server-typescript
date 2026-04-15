# V3DiscoverResponse

## Example Usage

```typescript
import { V3DiscoverResponse } from "@prove-identity/prove-api/models/components";

let value: V3DiscoverResponse = {
  results: [
    {
      attributeId: "123e4567-e89b-12d3-a456-426614174000",
      issuerId: "\"prove\"",
    },
    {
      attributeId: "123e4567-e89b-12d3-a456-426614174000",
      issuerId: "\"prove\"",
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `results`                                                | [components.Result](../../models/components/result.md)[] | :heavy_minus_sign:                                       | A list of discovered attributes for the given ProveID.   |