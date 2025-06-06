# V3TokenResponse

## Example Usage

```typescript
import { V3TokenResponse } from "@prove-identity/prove-api/models/components";

let value: V3TokenResponse = {
  accessToken: "eyJ...",
  expiresIn: 3600,
  refreshExpiresIn: 3600,
  refreshToken: "eyJ...",
  tokenType: "Bearer",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `accessToken`                                                           | *string*                                                                | :heavy_check_mark:                                                      | The access token used to authenticate API calls.                        | eyJ...                                                                  |
| `expiresIn`                                                             | *number*                                                                | :heavy_check_mark:                                                      | The lifetime of the token in seconds.                                   | 3600                                                                    |
| `refreshExpiresIn`                                                      | *number*                                                                | :heavy_minus_sign:                                                      | The lifetime of the refresh token in seconds. Not currently supported.  | 3600                                                                    |
| `refreshToken`                                                          | *string*                                                                | :heavy_minus_sign:                                                      | The token used to refresh the expiration time. Not currently supported. | eyJ...                                                                  |
| `tokenType`                                                             | *string*                                                                | :heavy_check_mark:                                                      | The type of token.                                                      | Bearer                                                                  |