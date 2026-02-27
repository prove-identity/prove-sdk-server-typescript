# AuthContinueResponse

## Example Usage

```typescript
import { AuthContinueResponse } from "@prove-identity/prove-api/models/components";

let value: AuthContinueResponse = {
  subjects: {
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
  },
};
```

## Fields

| Field                                                                                                                                                                                                          | Type                                                                                                                                                                                                           | Required                                                                                                                                                                                                       | Description                                                                                                                                                                                                    | Example                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `subjects`                                                                                                                                                                                                     | [components.AuthContinueResponseSubjectsResults](../../models/components/authcontinueresponsesubjectsresults.md)                                                                                               | :heavy_check_mark:                                                                                                                                                                                             | N/A                                                                                                                                                                                                            | {<br/>"mobile": {<br/>"success": true,<br/>"error": {<br/>"code": 10004,<br/>"message": "device authentication missing"<br/>}<br/>},<br/>"card": {<br/>"success": true,<br/>"error": {<br/>"code": 10004,<br/>"message": "device authentication missing"<br/>}<br/>}<br/>} |