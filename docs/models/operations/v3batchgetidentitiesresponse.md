# V3BatchGetIdentitiesResponse

## Example Usage

```typescript
import { V3BatchGetIdentitiesResponse } from "@prove-identity/prove-api/models/operations";

let value: V3BatchGetIdentitiesResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v3BatchGetIdentitiesResponse: {
    lastKey: "fNqtI2wVPka+yAFC5qRtrQ==",
    results: [
      {
        identityId: "4a6317c1-4855-4900-b369-bed138f4ec00",
      },
      {
        identityId: "e53c0597-1cce-4d8f-bd1b-e0a10f875ac9",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                        | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  | Example                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |                                                                                                                                                                              |
| `v3BatchGetIdentitiesResponse`                                                                                                                                               | [components.V3BatchGetIdentitiesResponse](../../models/components/v3batchgetidentitiesresponse.md)                                                                           | :heavy_minus_sign:                                                                                                                                                           | V3BatchGetIdentitiesResponse                                                                                                                                                 | {<br/>"lastKey": "fNqtI2wVPka+yAFC5qRtrQ==",<br/>"results": [<br/>{<br/>"identityId": "4a6317c1-4855-4900-b369-bed138f4ec00"<br/>},<br/>{<br/>"identityId": "e53c0597-1cce-4d8f-bd1b-e0a10f875ac9"<br/>}<br/>]<br/>} |