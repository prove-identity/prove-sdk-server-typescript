# V3BatchEnrollIdentitiesResponse

## Example Usage

```typescript
import { V3BatchEnrollIdentitiesResponse } from "@prove-identity/prove-api/models/operations";

let value: V3BatchEnrollIdentitiesResponse = {};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                               | :heavy_check_mark:                                                                                               | N/A                                                                                                              |                                                                                                                  |
| `v3BatchEnrollIdentitiesResponse`                                                                                | [components.V3BatchEnrollIdentitiesResponse](../../models/components/v3batchenrollidentitiesresponse.md)         | :heavy_minus_sign:                                                                                               | V3BatchEnrollIdentitiesResponse                                                                                  | {<br/>"results": [<br/>{<br/>"identityId": "e0f78bc2-f748-4eda-9d29-d756844507fc"<br/>},<br/>{<br/>"error": "Invalid Phone Number"<br/>}<br/>]<br/>} |