# V3BatchEnrollIdentitiesResponse

Response body for the V3 Batch Enroll Identities API.

## Example Usage

```typescript
import { V3BatchEnrollIdentitiesResponse } from "@prove-identity/prove-api/models/components";

let value: V3BatchEnrollIdentitiesResponse = {
  results: [
    {
      identityId: "e0f78bc2-f748-4eda-9d29-d756844507fc",
    },
    {
      error: "Invalid Phone Number",
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `results`                                                                          | [components.PostBatchResultItem](../../models/components/postbatchresultitem.md)[] | :heavy_minus_sign:                                                                 | N/A                                                                                |