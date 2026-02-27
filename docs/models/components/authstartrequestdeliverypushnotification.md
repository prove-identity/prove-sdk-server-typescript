# AuthStartRequestDeliveryPushNotification

## Example Usage

```typescript
import { AuthStartRequestDeliveryPushNotification } from "@prove-identity/prove-api/models/components";

let value: AuthStartRequestDeliveryPushNotification = {
  body: "Do you want to allow login from this device?",
  confirmBtn: "Confirm",
  denyBtn: "Deny",
  originatingDevice: "iPhone12",
  originatingIp: "198.51.100.10",
  title: "Confirm Login",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `body`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | Body is the body of the push message.                                                | Do you want to allow login from this device?                                         |
| `confirmBtn`                                                                         | *string*                                                                             | :heavy_minus_sign:                                                                   | ConfirmButton is the text of the push message confirm button.                        | Confirm                                                                              |
| `denyBtn`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | DenyButton is the text of the push message deny button.                              | Deny                                                                                 |
| `originatingDevice`                                                                  | *string*                                                                             | :heavy_minus_sign:                                                                   | OriginatingDevice is the type of device where where the push flow was initiated.     | iPhone12                                                                             |
| `originatingIp`                                                                      | *string*                                                                             | :heavy_minus_sign:                                                                   | OriginatingIp is the IP address of the web client where the push flow was initiated. | 198.51.100.10                                                                        |
| `title`                                                                              | *string*                                                                             | :heavy_check_mark:                                                                   | Title is the title of the push message.                                              | Confirm Login                                                                        |