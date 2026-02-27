# V3FetchResponse

Response body for the Fetch API GET method.

## Example Usage

```typescript
import { V3FetchResponse } from "@prove-identity/prove-api/models/components";

let value: V3FetchResponse = {
  results: [
    {
      attributeId: "550e8400-e29b-41d4-a716-446655440000",
      attributeValue: "ext-wallet-992834",
      issuerId: "Aeropay",
    },
    {
      attributeId: "550e8400-e29b-41d4-a716-446655440000",
      attributeValue: "ext-wallet-992834",
      issuerId: "Aeropay",
    },
  ],
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `results`                                                                                 | [components.FetchResult](../../models/components/fetchresult.md)[]                        | :heavy_check_mark:                                                                        | Array of identity attribute results containing attributeId, issuerId, and attributeValue. |