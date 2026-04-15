# AuthContinueResponseSubjectMobileResult

## Example Usage

```typescript
import { AuthContinueResponseSubjectMobileResult } from "@prove-identity/prove-api/models/components";

let value: AuthContinueResponseSubjectMobileResult = {
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
| `success`                                                                                    | *boolean*                                                                                    | :heavy_check_mark:                                                                           | Success will be true if the bind was successful.                                             | true                                                                                         |