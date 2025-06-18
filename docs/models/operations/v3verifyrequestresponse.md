# V3VerifyRequestResponse

## Example Usage

```typescript
import { V3VerifyRequestResponse } from "@prove-identity/prove-api/models/operations";

let value: V3VerifyRequestResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v3VerifyResponse: {
    authToken: "eyJhbGciOi...",
    correlationId: "713189b8-5555-4b08-83ba-75d08780aebd",
    possessionResult: {},
    success: "pending",
    verifyResult: {},
  },
};
```

## Fields

| Field                                                                                                                                                                     | Type                                                                                                                                                                      | Required                                                                                                                                                                  | Description                                                                                                                                                               | Example                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                                                                                | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                                                                        | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |                                                                                                                                                                           |
| `v3VerifyResponse`                                                                                                                                                        | [components.V3VerifyResponse](../../models/components/v3verifyresponse.md)                                                                                                | :heavy_minus_sign:                                                                                                                                                        | Successful request.                                                                                                                                                       | {<br/>"success": "pending",<br/>"authToken": "eyJhbGciOi...",<br/>"possessionResult": "pending",<br/>"verifyResult": "pending",<br/>"correlationId": "713189b8-5555-4b08-83ba-75d08780aebd"<br/>} |