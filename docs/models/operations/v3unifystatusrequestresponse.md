# V3UnifyStatusRequestResponse

## Example Usage

```typescript
import { V3UnifyStatusRequestResponse } from "@prove-identity/prove-api/models/operations";

let value: V3UnifyStatusRequestResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v3UnifyStatusResponse: {
    phoneNumber: "2001004011",
    success: "success",
  },
  headers: {
    "key": [
      "<value>",
    ],
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `httpMeta`                                                                           | [components.HTTPMetadata](../../models/components/httpmetadata.md)                   | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |
| `v3UnifyStatusResponse`                                                              | [components.V3UnifyStatusResponse](../../models/components/v3unifystatusresponse.md) | :heavy_minus_sign:                                                                   | Successful Request                                                                   | {<br/>"phoneNumber": "2001004011",<br/>"success": "success"<br/>}                    |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |