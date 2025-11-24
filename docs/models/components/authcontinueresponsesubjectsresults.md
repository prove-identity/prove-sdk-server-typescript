# AuthContinueResponseSubjectsResults

## Example Usage

```typescript
import { AuthContinueResponseSubjectsResults } from "@prove-identity/prove-api/models/components";

let value: AuthContinueResponseSubjectsResults = {
  card: {
    error: {
      code: 10004,
      message: "device authentication missing",
    },
    success: true,
  },
  mobile: {
    error: {
      code: 10004,
      message: "device authentication missing",
    },
    success: true,
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `card`                                                                                                                   | [components.AuthContinueResponseSubjectCardResult](../../models/components/authcontinueresponsesubjectcardresult.md)     | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      | {<br/>"success": true,<br/>"error": {<br/>"code": 10004,<br/>"message": "device authentication missing"<br/>}<br/>}      |
| `mobile`                                                                                                                 | [components.AuthContinueResponseSubjectMobileResult](../../models/components/authcontinueresponsesubjectmobileresult.md) | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      | {<br/>"success": true,<br/>"error": {<br/>"code": 10004,<br/>"message": "device authentication missing"<br/>}<br/>}      |