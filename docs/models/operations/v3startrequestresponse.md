# V3StartRequestResponse

## Example Usage

```typescript
import { V3StartRequestResponse } from "@prove-identity/prove-api/models/operations";

let value: V3StartRequestResponse = {};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          | Example                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                                                           | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                                   | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |                                                                                                                                      |
| `v3StartResponse`                                                                                                                    | [components.V3StartResponse](../../models/components/v3startresponse.md)                                                             | :heavy_minus_sign:                                                                                                                   | Successful request.                                                                                                                  | {<br/>"next": {<br/>"v3-validate": "/v3/validate"<br/>},<br/>"authToken": "eyJhbGciOi...",<br/>"correlationId": "713189b8-5555-4b08-83ba-75d08780aebd"<br/>} |