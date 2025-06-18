# V3EnrollIdentityResponse

## Example Usage

```typescript
import { V3EnrollIdentityResponse } from "@prove-identity/prove-api/models/operations";

let value: V3EnrollIdentityResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v3EnrollIdentityResponse: {
    identityId: "863189q5-5555-4c15-89ba-15d08710aecz",
    success: true,
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                         | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |
| `v3EnrollIdentityResponse`                                                                 | [components.V3EnrollIdentityResponse](../../models/components/v3enrollidentityresponse.md) | :heavy_minus_sign:                                                                         | V3EnrollIdentityResponse                                                                   | {<br/>"identityId": "863189q5-5555-4c15-89ba-15d08710aecz",<br/>"success": true<br/>}      |