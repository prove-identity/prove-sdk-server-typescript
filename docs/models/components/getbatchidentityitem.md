# GetBatchIdentityItem

## Example Usage

```typescript
import { GetBatchIdentityItem } from "@prove-identity/prove-api/models/components";

let value: GetBatchIdentityItem = {
  identityId: "e0f78bc2-f748-4eda-9d29-d756844507fc",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  | Example                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `identityId`                                                                                                                                 | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | A unique Prove-generated identifier for the enrolled identity. This is a UUID that can be used to reference the identity in future requests. | e0f78bc2-f748-4eda-9d29-d756844507fc                                                                                                         |