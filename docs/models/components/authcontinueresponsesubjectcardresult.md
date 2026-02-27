# AuthContinueResponseSubjectCardResult

## Example Usage

```typescript
import { AuthContinueResponseSubjectCardResult } from "@prove-identity/prove-api/models/components";

let value: AuthContinueResponseSubjectCardResult = {
  error: {
    code: 10004,
    message: "device authentication missing",
  },
  success: true,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `error`                                                                                      | [components.AuthContinueResponseError](../../models/components/authcontinueresponseerror.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          | {<br/>"code": 10004,<br/>"message": "device authentication missing"<br/>}                    |
| `success`                                                                                    | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |