# V3DeviceRevokeRequestResponse

## Example Usage

```typescript
import { V3DeviceRevokeRequestResponse } from "@prove-identity/prove-api/models/operations";

let value: V3DeviceRevokeRequestResponse = {
  headers: {
    "key": [],
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `httpMeta`                                                                             | [components.HTTPMetadata](../../models/components/httpmetadata.md)                     | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `v3DeviceRevokeResponse`                                                               | [components.V3DeviceRevokeResponse](../../models/components/v3devicerevokeresponse.md) | :heavy_minus_sign:                                                                     | Successful Request.                                                                    | {<br/>"success": true<br/>}                                                            |
| `headers`                                                                              | Record<string, *string*[]>                                                             | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |