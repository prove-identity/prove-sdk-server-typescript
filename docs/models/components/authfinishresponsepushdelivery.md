# AuthFinishResponsePushDelivery

## Example Usage

```typescript
import { AuthFinishResponsePushDelivery } from "@prove-identity/prove-api/models/components";

let value: AuthFinishResponsePushDelivery = {
  extras: {
    distanceFromOriginatingIp: 0,
    originatingIpGeolocation: "originatingIpGeolocation",
  },
  response: "response",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `extras`                                                                                                           | [components.AuthFinishResponsePushDeliveryExtras](../../models/components/authfinishresponsepushdeliveryextras.md) | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                | {<br/>"originatingIpGeolocation": "originatingIpGeolocation",<br/>"distanceFromOriginatingIp": 0<br/>}             |
| `response`                                                                                                         | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |                                                                                                                    |