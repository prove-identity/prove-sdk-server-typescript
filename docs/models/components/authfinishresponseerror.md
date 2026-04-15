# AuthFinishResponseError

## Example Usage

```typescript
import { AuthFinishResponseError } from "@prove-identity/prove-api/models/components";

let value: AuthFinishResponseError = {
  code: 10004,
  message: "device authentication missing",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `code`                                                                             | *number*                                                                           | :heavy_minus_sign:                                                                 | Code is an internal error code that describes the problem category of the request. | 10004                                                                              |
| `message`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | Message is an error message describing the problem with the request.               | device authentication missing                                                      |