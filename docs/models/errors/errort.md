# ErrorT

## Example Usage

```typescript
import { ErrorT } from "@prove-identity/prove-api/models/errors";

// No examples available for this model
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `code`                                                            | *number*                                                          | :heavy_minus_sign:                                                | An error code that describes the problem category of the request. | 8000                                                              |
| `message`                                                         | *string*                                                          | :heavy_check_mark:                                                | The error message describing the problem with the request.        | error at prove, try again later                                   |