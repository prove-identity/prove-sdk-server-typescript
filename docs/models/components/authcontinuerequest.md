# AuthContinueRequest

## Example Usage

```typescript
import { AuthContinueRequest } from "@prove-identity/prove-api/models/components";

let value: AuthContinueRequest = {
  authId: "713189b8-5555-4b08-83ba-75d08780aebd",
  requestId: "eba12f3a-5555-47bc-b85d-21c0cbc4b973",
  subjects: {
    mobile: {
      claim: {
        mobileNumber: "12065550100",
      },
    },
  },
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              | Example                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `authId`                                                                                                                                                                 | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | AuthID is the unique ID of the auth flow to continue.                                                                                                                    | 713189b8-5555-4b08-83ba-75d08780aebd                                                                                                                                     |
| `requestId`                                                                                                                                                              | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | RequestID is a UUID generated on the customer side to be associated with the unique request for tracking.<br/>Acceptable characters are: alphanumeric with symbols '-._+=/'. | eba12f3a-5555-47bc-b85d-21c0cbc4b973                                                                                                                                     |
| `subjects`                                                                                                                                                               | [components.AuthContinueRequestSubjects](../../models/components/authcontinuerequestsubjects.md)                                                                         | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      | {<br/>"mobile": {<br/>"claim": {<br/>"mobileNumber": "12065550100"<br/>}<br/>}<br/>}                                                                                     |