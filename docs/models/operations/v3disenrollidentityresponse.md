# V3DisenrollIdentityResponse

## Example Usage

```typescript
import { V3DisenrollIdentityResponse } from "@prove-identity/prove-api/models/operations";

let value: V3DisenrollIdentityResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v3DisenrollIdentityResponse: {
    success: true,
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)                               | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |
| `v3DisenrollIdentityResponse`                                                                    | [components.V3DisenrollIdentityResponse](../../models/components/v3disenrollidentityresponse.md) | :heavy_minus_sign:                                                                               | V3DisenrollIdentityResponse                                                                      | {<br/>"success": true<br/>}                                                                      |