# AuthStartRequestDeliveryPush

## Example Usage

```typescript
import { AuthStartRequestDeliveryPush } from "@prove-identity/prove-api/models/components";

let value: AuthStartRequestDeliveryPush = {
  notification: {
    body: "Do you want to allow login from this device?",
    confirmBtn: "Confirm",
    denyBtn: "Deny",
    originatingDevice: "iPhone12",
    originatingIp: "198.51.100.10",
    title: "Confirm Login",
  },
};
```

## Fields

| Field                                                                                                                                                                                               | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         | Example                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `notification`                                                                                                                                                                                      | [components.AuthStartRequestDeliveryPushNotification](../../models/components/authstartrequestdeliverypushnotification.md)                                                                          | :heavy_check_mark:                                                                                                                                                                                  | N/A                                                                                                                                                                                                 | {<br/>"body": "Do you want to allow login from this device?",<br/>"confirmBtn": "Confirm",<br/>"denyBtn": "Deny",<br/>"originatingDevice": "iPhone12",<br/>"originatingIp": "198.51.100.10",<br/>"title": "Confirm Login"<br/>} |