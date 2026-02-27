# ErrorT

## Example Usage

```typescript
import { ErrorT } from "@prove-identity/prove-api/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `code`                                                                             | *number*                                                                           | :heavy_minus_sign:                                                                 | Code is an internal error code that describes the problem category of the request. | 1000                                                                               |
| `message`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | Message is an error message describing the problem with the request.               | error occurred                                                                     |