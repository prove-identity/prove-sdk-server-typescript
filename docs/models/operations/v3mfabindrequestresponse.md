# V3MFABindRequestResponse

## Example Usage

```typescript
import { V3MFABindRequestResponse } from "@prove-identity/prove-api/models/operations";

let value: V3MFABindRequestResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v3MFABindResponse: {
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

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `httpMeta`                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)           | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |
| `v3MFABindResponse`                                                          | [components.V3MFABindResponse](../../models/components/v3mfabindresponse.md) | :heavy_minus_sign:                                                           | Successful Request                                                           | {<br/>"phoneNumber": "2001004011",<br/>"success": "success"<br/>}            |
| `headers`                                                                    | Record<string, *string*[]>                                                   | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |