# PostBatchResultItem

Represents a single identity item in the response.

## Example Usage

```typescript
import { PostBatchResultItem } from "@prove-identity/prove-api/models/components";

let value: PostBatchResultItem = {
  error: "Invalid Phone Number",
  identityId: "e0f78bc2-f748-4eda-9d29-d756844507fc",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  | Example                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `error`                                                                                                                                      | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | An error message that is returned if the identity cannot be successfully enrolled.                                                           | Invalid Phone Number                                                                                                                         |
| `identityId`                                                                                                                                 | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | A unique Prove-generated identifier for the enrolled identity. This is a UUID that can be used to reference the identity in future requests. | e0f78bc2-f748-4eda-9d29-d756844507fc                                                                                                         |