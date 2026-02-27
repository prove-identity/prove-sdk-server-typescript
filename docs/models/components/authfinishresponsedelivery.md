# AuthFinishResponseDelivery

## Example Usage

```typescript
import { AuthFinishResponseDelivery } from "@prove-identity/prove-api/models/components";

let value: AuthFinishResponseDelivery = {
  push: {
    extras: {
      distanceFromOriginatingIp: 0,
      originatingIpGeolocation: "originatingIpGeolocation",
    },
    response: "response",
  },
  scan: {
    extras: {
      originatingIpGeolocation: "originatingIpGeolocation",
    },
    response: "response",
  },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      | Example                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `push`                                                                                                                           | [components.AuthFinishResponsePushDelivery](../../models/components/authfinishresponsepushdelivery.md)                           | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              | {<br/>"response": "response",<br/>"extras": {<br/>"originatingIpGeolocation": "originatingIpGeolocation",<br/>"distanceFromOriginatingIp": 0<br/>}<br/>} |
| `scan`                                                                                                                           | [components.AuthFinishResponseScanDelivery](../../models/components/authfinishresponsescandelivery.md)                           | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              | {<br/>"response": "response",<br/>"extras": {<br/>"originatingIpGeolocation": "originatingIpGeolocation"<br/>}<br/>}             |