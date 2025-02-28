# V3VerifyStatusRequestResponse

## Example Usage

```typescript
import { V3VerifyStatusRequestResponse } from "@prove-identity/prove-api/models/operations";

let value: V3VerifyStatusRequestResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v3VerifyStatusResponse: {
    possessionResult: {},
    success: {},
    verifyResult: {},
  },
  headers: {
    "key": [
      "<value>",
    ],
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `httpMeta`                                                                             | [components.HTTPMetadata](../../models/components/httpmetadata.md)                     | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `v3VerifyStatusResponse`                                                               | [components.V3VerifyStatusResponse](../../models/components/v3verifystatusresponse.md) | :heavy_minus_sign:                                                                     | Successful Request                                                                     | {<br/>"success": "pending",<br/>"possessionResult": "pending",<br/>"verifyResult": "pending"<br/>} |
| `headers`                                                                              | Record<string, *string*[]>                                                             | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |