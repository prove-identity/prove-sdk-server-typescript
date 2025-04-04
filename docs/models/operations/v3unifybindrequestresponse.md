# V3UnifyBindRequestResponse

## Example Usage

```typescript
import { V3UnifyBindRequestResponse } from "@prove-identity/prove-api/models/operations";

let value: V3UnifyBindRequestResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v3UnifyBindResponse: {
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
| `v3UnifyBindResponse`                                                            | [components.V3UnifyBindResponse](../../models/components/v3unifybindresponse.md) | :heavy_minus_sign:                                                               | Successful Request                                                               | {<br/>"phoneNumber": "2001004011",<br/>"success": "success"<br/>}                |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |