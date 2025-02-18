# V3MFAStatusRequestResponse

## Example Usage

```typescript
import { V3MFAStatusRequestResponse } from "@prove-identity/prove-api/models/operations";

let value: V3MFAStatusRequestResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v3MFAStatusResponse: {
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

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `httpMeta`                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)               | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |
| `v3MFAStatusResponse`                                                            | [components.V3MFAStatusResponse](../../models/components/v3mfastatusresponse.md) | :heavy_minus_sign:                                                               | Successful Request                                                               | {<br/>"phoneNumber": "2001004011",<br/>"success": "success"<br/>}                |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |