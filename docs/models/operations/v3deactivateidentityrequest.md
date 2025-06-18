# V3DeactivateIdentityRequest

## Example Usage

```typescript
import { V3DeactivateIdentityRequest } from "@prove-identity/prove-api/models/operations";

let value: V3DeactivateIdentityRequest = {
  identityId: "<id>",
  v3IdentityDeactivateRequest: {
    clientRequestId: "71010d88-d0e7-4a24-9297-d1be6fefde81",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `identityId`                                                                                     | *string*                                                                                         | :heavy_check_mark:                                                                               | A Prove-generated unique ID for a specific identity.                                             |                                                                                                  |
| `v3IdentityDeactivateRequest`                                                                    | [components.V3IdentityDeactivateRequest](../../models/components/v3identitydeactivaterequest.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              | {<br/>"clientRequestId": "71010d88-d0e7-4a24-9297-d1be6fefde81"<br/>}                            |