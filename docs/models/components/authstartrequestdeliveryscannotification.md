# AuthStartRequestDeliveryScanNotification

## Example Usage

```typescript
import { AuthStartRequestDeliveryScanNotification } from "@prove-identity/prove-api/models/components";

let value: AuthStartRequestDeliveryScanNotification = {
  body: "Please confirm you are trying to sign in...",
  confirmBtn: "Confirm",
  denyBtn: "Deny",
  originatingDevice: "Google Chrome on Windows",
  originatingIp: "198.51.100.10",
  title: "Confirm Sign In",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `body`                                                                                  | *string*                                                                                | :heavy_check_mark:                                                                      | Body is the body of the scan QR message.                                                | Please confirm you are trying to sign in...                                             |
| `confirmBtn`                                                                            | *string*                                                                                | :heavy_minus_sign:                                                                      | ConfirmButton is the text of the scan QR message confirm button.                        | Confirm                                                                                 |
| `denyBtn`                                                                               | *string*                                                                                | :heavy_minus_sign:                                                                      | DenyButton is the text of the scan QR message deny button.                              | Deny                                                                                    |
| `originatingDevice`                                                                     | *string*                                                                                | :heavy_minus_sign:                                                                      | OriginatingDevice is the type of device where where the scan QR flow was initiated.     | Google Chrome on Windows                                                                |
| `originatingIp`                                                                         | *string*                                                                                | :heavy_minus_sign:                                                                      | OriginatingIp is the IP address of the web client where the scan QR flow was initiated. | 198.51.100.10                                                                           |
| `title`                                                                                 | *string*                                                                                | :heavy_check_mark:                                                                      | Title is the title of the scan QR message.                                              | Confirm Sign In                                                                         |