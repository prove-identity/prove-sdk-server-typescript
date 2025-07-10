# V3UnifyBindRequestResponse

## Example Usage

```typescript
import { V3UnifyBindRequestResponse } from "@prove-identity/prove-api/models/operations";

let value: V3UnifyBindRequestResponse = {
  headers: {},
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `httpMeta`                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)               | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |
| `v3UnifyBindResponse`                                                            | [components.V3UnifyBindResponse](../../models/components/v3unifybindresponse.md) | :heavy_minus_sign:                                                               | Successful Request.                                                              | {<br/>"phoneNumber": "2001004011",<br/>"success": "true"<br/>}                   |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |