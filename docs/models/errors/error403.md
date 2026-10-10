# Error403

## Example Usage

```typescript
import { Error403 } from "@prove-identity/prove-api/models/errors";

// No examples available for this model
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `clientRequestId`                                               | *string*                                                        | :heavy_minus_sign:                                              | The input ClientRequestID, echoed when provided on the request. | 71010d88-d0e7-4a24-9297-d1be6fefde81                            |
| `code`                                                          | *number*                                                        | :heavy_minus_sign:                                              | An error code that identifies the specific authorization issue. | 8003                                                            |
| `correlationId`                                                 | *string*                                                        | :heavy_minus_sign:                                              | The correlation ID for the flow, echoed when available.         | 713189b8-5555-4b08-83ba-75d08780aebd                            |
| `message`                                                       | *string*                                                        | :heavy_check_mark:                                              | The error message describing why access is forbidden.           | Access forbidden: insufficient permissions                      |