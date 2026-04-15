# AuthStartRequestSubjectUser

## Example Usage

```typescript
import { AuthStartRequestSubjectUser } from "@prove-identity/prove-api/models/components";

let value: AuthStartRequestSubjectUser = {
  authenticators: {
    docv: {},
    passive: {
      userVerificationLevel: "userVerificationLevel",
    },
    ppb: {},
    present: {},
  },
  claim: {
    provided: true,
    userId: "eba12f3a-5555-47bc-b85d-21c0cbc4b973",
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `authenticators`                                                                                                             | [components.AuthStartRequestSubjectUserAuthenticators](../../models/components/authstartrequestsubjectuserauthenticators.md) | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          | {<br/>"docv": "{}",<br/>"ppb": "{}",<br/>"present": "{}",<br/>"passive": {<br/>"userVerificationLevel": "userVerificationLevel"<br/>}<br/>} |
| `claim`                                                                                                                      | [components.AuthStartRequestSubjectUserClaim](../../models/components/authstartrequestsubjectuserclaim.md)                   | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          | {<br/>"provided": true,<br/>"userId": "eba12f3a-5555-47bc-b85d-21c0cbc4b973"<br/>}                                           |