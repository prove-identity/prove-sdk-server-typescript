# AuthFinishRequest

## Example Usage

```typescript
import { AuthFinishRequest } from "@prove-identity/prove-api/models/components";

let value: AuthFinishRequest = {
  authId: "eba12f3a-5555-47bc-b85d-21c0cbc4b973",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `authId`                                                         | *string*                                                         | :heavy_check_mark:                                               | AuthID is the unique ID of the auth flow to retrieve the result. | eba12f3a-5555-47bc-b85d-21c0cbc4b973                             |