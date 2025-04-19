# Error403

## Example Usage

```typescript
import { Error403 } from "@prove-identity/prove-api/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `code`                                                                   | *number*                                                                 | :heavy_minus_sign:                                                       | An internal error code that identifies the specific authorization issue. | 8003                                                                     |
| `message`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | An error message describing why access is forbidden.                     | Access forbidden: insufficient permissions                               |