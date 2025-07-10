# V3TokenRequestResponse

## Example Usage

```typescript
import { V3TokenRequestResponse } from "@prove-identity/prove-api/models/operations";

let value: V3TokenRequestResponse = {};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     | Example                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                                      | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                              | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |                                                                                                                                 |
| `v3TokenResponse`                                                                                                               | [components.V3TokenResponse](../../models/components/v3tokenresponse.md)                                                        | :heavy_minus_sign:                                                                                                              | Successful request.                                                                                                             | {<br/>"access_token": "eyJ...",<br/>"refresh_token": "eyJ...",<br/>"refresh_expires_in": 3600,<br/>"token_type": "Bearer",<br/>"expires_in": 3600<br/>} |