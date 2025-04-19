# V3UnifyResponse

## Example Usage

```typescript
import { V3UnifyResponse } from "@prove-identity/prove-api/models/components";

let value: V3UnifyResponse = {
  authToken: "eyJhbGciOi...",
  correlationId: "713189b8-5555-4b08-83ba-75d08780aebd",
  success: "success",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      | Example                                          |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `authToken`                                      | *string*                                         | :heavy_minus_sign:                               | The one-time use JWT for the client-side SDK.    | eyJhbGciOi...                                    |
| `correlationId`                                  | *string*                                         | :heavy_check_mark:                               | The unique ID that Prove generates for the flow. | 713189b8-5555-4b08-83ba-75d08780aebd             |
| `success`                                        | *string*                                         | :heavy_check_mark:                               | N/A                                              |                                                  |