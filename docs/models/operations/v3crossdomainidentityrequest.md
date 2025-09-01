# V3CrossDomainIdentityRequest

## Example Usage

```typescript
import { V3CrossDomainIdentityRequest } from "@prove-identity/prove-api/models/operations";

let value: V3CrossDomainIdentityRequest = {
  identityId: "<id>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `identityId`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | A Prove-generated unique ID for a specific identity.                                               |                                                                                                    |
| `v3CrossDomainIdentityRequest`                                                                     | [components.V3CrossDomainIdentityRequest](../../models/components/v3crossdomainidentityrequest.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                | {<br/>"clientRequestId": "71010d88-d0e7-4a24-9297-d1be6fefde81"<br/>}                              |