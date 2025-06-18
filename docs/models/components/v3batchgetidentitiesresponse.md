# V3BatchGetIdentitiesResponse

Response body for the V3 Batch Get Identities API.

## Example Usage

```typescript
import { V3BatchGetIdentitiesResponse } from "@prove-identity/prove-api/models/components";

let value: V3BatchGetIdentitiesResponse = {
  lastKey: "fNqtI2wVPka+yAFC5qRtrQ==",
  results: [
    {
      identityId: "4a6317c1-4855-4900-b369-bed138f4ec00",
    },
    {
      identityId: "e53c0597-1cce-4d8f-bd1b-e0a10f875ac9",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                       | Type                                                                                                                                                                                        | Required                                                                                                                                                                                    | Description                                                                                                                                                                                 | Example                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `lastKey`                                                                                                                                                                                   | *string*                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                          | A pagination token for callers that have more identities left to return. Pass this back in directly to the Get Batch API with the startKey query parameter to get the next page of results. | fNqtI2wVPka+yAFC5qRtrQ==                                                                                                                                                                    |
| `results`                                                                                                                                                                                   | [components.GetBatchIdentityItem](../../models/components/getbatchidentityitem.md)[]                                                                                                        | :heavy_check_mark:                                                                                                                                                                          | The list of identity IDs associated with the client.                                                                                                                                        | [<br/>{<br/>"identityId": "4a6317c1-4855-4900-b369-bed138f4ec00"<br/>},<br/>{<br/>"identityId": "e53c0597-1cce-4d8f-bd1b-e0a10f875ac9"<br/>}<br/>]                                          |