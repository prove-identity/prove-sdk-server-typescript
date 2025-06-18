# V3ActivateIdentityRequest

## Example Usage

```typescript
import { V3ActivateIdentityRequest } from "@prove-identity/prove-api/models/operations";

let value: V3ActivateIdentityRequest = {
  identityId: "<id>",
  v3ActivateIdentityRequest: {
    clientRequestId: "71010d88-d0e7-4a24-9297-d1be6fefde81",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `identityId`                                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | A Prove-generated unique ID for a specific identity.                                         |                                                                                              |
| `v3ActivateIdentityRequest`                                                                  | [components.V3ActivateIdentityRequest](../../models/components/v3activateidentityrequest.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          | {<br/>"clientRequestId": "71010d88-d0e7-4a24-9297-d1be6fefde81"<br/>}                        |