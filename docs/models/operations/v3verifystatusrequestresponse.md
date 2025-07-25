# V3VerifyStatusRequestResponse

## Example Usage

```typescript
import { V3VerifyStatusRequestResponse } from "@prove-identity/prove-api/models/operations";

let value: V3VerifyStatusRequestResponse = {
  headers: {},
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     | Example                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                                      | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                              | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |                                                                                                                                 |
| `v3VerifyStatusResponse`                                                                                                        | [components.V3VerifyStatusResponse](../../models/components/v3verifystatusresponse.md)                                          | :heavy_minus_sign:                                                                                                              | Successful Request                                                                                                              | {<br/>"identityId": "498ce2a7-a7c1-48aa-8bd3-77621f780919",<br/>"success": "true",<br/>"possessionResult": "true",<br/>"verifyResult": "true"<br/>} |
| `headers`                                                                                                                       | Record<string, *string*[]>                                                                                                      | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |                                                                                                                                 |