# AuthStartRequestDeliveryScan

## Example Usage

```typescript
import { AuthStartRequestDeliveryScan } from "@prove-identity/prove-api/models/components";

let value: AuthStartRequestDeliveryScan = {
  notification: {
    body: "Please confirm you are trying to sign in...",
    confirmBtn: "Confirm",
    denyBtn: "Deny",
    originatingDevice: "Google Chrome on Windows",
    originatingIp: "198.51.100.10",
    title: "Confirm Sign In",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                | Type                                                                                                                                                                                                                 | Required                                                                                                                                                                                                             | Description                                                                                                                                                                                                          | Example                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `notification`                                                                                                                                                                                                       | [components.AuthStartRequestDeliveryScanNotification](../../models/components/authstartrequestdeliveryscannotification.md)                                                                                           | :heavy_check_mark:                                                                                                                                                                                                   | N/A                                                                                                                                                                                                                  | {<br/>"body": "Please confirm you are trying to sign in...",<br/>"confirmBtn": "Confirm",<br/>"denyBtn": "Deny",<br/>"originatingDevice": "Google Chrome on Windows",<br/>"originatingIp": "198.51.100.10",<br/>"title": "Confirm Sign In"<br/>} |