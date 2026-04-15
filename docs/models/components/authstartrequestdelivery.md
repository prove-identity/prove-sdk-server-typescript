# AuthStartRequestDelivery

## Example Usage

```typescript
import { AuthStartRequestDelivery } from "@prove-identity/prove-api/models/components";

let value: AuthStartRequestDelivery = {
  push: {
    notification: {
      body: "Do you want to allow login from this device?",
      confirmBtn: "Confirm",
      denyBtn: "Deny",
      originatingDevice: "iPhone12",
      originatingIp: "198.51.100.10",
      title: "Confirm Login",
    },
  },
  scan: {
    notification: {
      body: "Please confirm you are trying to sign in...",
      confirmBtn: "Confirm",
      denyBtn: "Deny",
      originatingDevice: "Google Chrome on Windows",
      originatingIp: "198.51.100.10",
      title: "Confirm Sign In",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                              | Example                                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `push`                                                                                                                                                                                                                                   | [components.AuthStartRequestDeliveryPush](../../models/components/authstartrequestdeliverypush.md)                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                      | {<br/>"notification": {<br/>"originatingIp": "198.51.100.10",<br/>"originatingDevice": "iPhone12",<br/>"confirmBtn": "Confirm",<br/>"body": "Do you want to allow login from this device?",<br/>"title": "Confirm Login",<br/>"denyBtn": "Deny"<br/>}<br/>} |
| `scan`                                                                                                                                                                                                                                   | [components.AuthStartRequestDeliveryScan](../../models/components/authstartrequestdeliveryscan.md)                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                      | {<br/>"notification": {<br/>"originatingIp": "198.51.100.10",<br/>"originatingDevice": "Google Chrome on Windows",<br/>"confirmBtn": "Confirm",<br/>"body": "Please confirm you are trying to sign in...",<br/>"title": "Confirm Sign In",<br/>"denyBtn": "Deny"<br/>}<br/>} |