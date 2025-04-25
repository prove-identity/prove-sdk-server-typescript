# V3UnifyStatusRequest

## Example Usage

```typescript
import { V3UnifyStatusRequest } from "@prove-identity/prove-api/models/components";

let value: V3UnifyStatusRequest = {
  clientRequestId: "71010d88-d0e7-4a24-9297-d1be6fefde81",
  correlationId: "713189b8-5555-4b08-83ba-75d08780aebd",
  phoneNumber: "2001004011",
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               | Example                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `clientRequestId`                                                                                                                         | *string*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | A client-generated unique ID for a specific request.                                                                                      | 71010d88-d0e7-4a24-9297-d1be6fefde81                                                                                                      |
| `correlationId`                                                                                                                           | *string*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | The unique ID that Prove generates for the flow. It is returned<br/>from the v3/unify endpoint and cannot be reused outside of a single flow. | 713189b8-5555-4b08-83ba-75d08780aebd                                                                                                      |
| `phoneNumber`                                                                                                                             | *string*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | The number of the mobile phone. Required when `possessionType=none` in the initial Unify request.                                         | 2001004011                                                                                                                                |