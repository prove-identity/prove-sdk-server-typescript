# V3MFARequestResponse

## Example Usage

```typescript
import { V3MFARequestResponse } from "@prove-identity/prove-api/models/operations";

let value: V3MFARequestResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v3MFAResponse: {
    authToken: "eyJhbGciOi...",
    correlationId: "713189b8-5555-4b08-83ba-75d08780aebd",
    success: "success",
  },
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                      | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                              | :heavy_check_mark:                                                                                              | N/A                                                                                                             |                                                                                                                 |
| `v3MFAResponse`                                                                                                 | [components.V3MFAResponse](../../models/components/v3mfaresponse.md)                                            | :heavy_minus_sign:                                                                                              | Successful request.                                                                                             | {<br/>"success": "success",<br/>"authToken": "eyJhbGciOi...",<br/>"correlationId": "713189b8-5555-4b08-83ba-75d08780aebd"<br/>} |