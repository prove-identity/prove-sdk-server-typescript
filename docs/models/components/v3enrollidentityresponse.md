# V3EnrollIdentityResponse

Response body for the V3 Enroll Identity method.

## Example Usage

```typescript
import { V3EnrollIdentityResponse } from "@prove-identity/prove-api/models/components";

let value: V3EnrollIdentityResponse = {
  identityId: "863189q5-5555-4c15-89ba-15d08710aecz",
  success: true,
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  | Example                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `identityId`                                                                                                                                 | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | A unique Prove-generated identifier for the enrolled identity. This is a UUID that can be used to reference the identity in future requests. | 863189q5-5555-4c15-89ba-15d08710aecz                                                                                                         |
| `success`                                                                                                                                    | *boolean*                                                                                                                                    | :heavy_check_mark:                                                                                                                           | If true, the request was successful and the identity was created.                                                                            | true                                                                                                                                         |