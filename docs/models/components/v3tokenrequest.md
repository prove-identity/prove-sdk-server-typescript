# V3TokenRequest

## Example Usage

```typescript
import { V3TokenRequest } from "@prove-identity/prove-api/models/components";

let value: V3TokenRequest = {
  clientId: "customer_id",
  clientSecret: "secret",
  grantType: "client_credentials",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `clientId`                                                                                                     | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The client ID retrieved from the [Developer Portal](https://developer.prove.com/reference/authentication).     | customer_id                                                                                                    |
| `clientSecret`                                                                                                 | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The client secret retrieved from the [Developer Portal](https://developer.prove.com/reference/authentication). | secret                                                                                                         |
| `grantType`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The grant type. This field only accepts `client_credentials`.                                                  | client_credentials                                                                                             |