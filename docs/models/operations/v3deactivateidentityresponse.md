# V3DeactivateIdentityResponse

## Example Usage

```typescript
import { V3DeactivateIdentityResponse } from "@prove-identity/prove-api/models/operations";

let value: V3DeactivateIdentityResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v3DeactivateIdentityResponse: {
    success: true,
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                 | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |
| `v3DeactivateIdentityResponse`                                                                     | [components.V3DeactivateIdentityResponse](../../models/components/v3deactivateidentityresponse.md) | :heavy_minus_sign:                                                                                 | V3DeactivateIdentityResponse                                                                       | {<br/>"success": true<br/>}                                                                        |