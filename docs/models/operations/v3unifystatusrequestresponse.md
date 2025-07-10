# V3UnifyStatusRequestResponse

## Example Usage

```typescript
import { V3UnifyStatusRequestResponse } from "@prove-identity/prove-api/models/operations";

let value: V3UnifyStatusRequestResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `httpMeta`                                                                           | [components.HTTPMetadata](../../models/components/httpmetadata.md)                   | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |
| `v3UnifyStatusResponse`                                                              | [components.V3UnifyStatusResponse](../../models/components/v3unifystatusresponse.md) | :heavy_minus_sign:                                                                   | Successful Request.                                                                  | {<br/>"phoneNumber": "2001004011",<br/>"success": "true"<br/>}                       |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |