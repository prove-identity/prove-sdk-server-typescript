# AuthStartRequestSubjectCardAuthenticatorAirKey

## Example Usage

```typescript
import { AuthStartRequestSubjectCardAuthenticatorAirKey } from "@prove-identity/prove-api/models/components";

let value: AuthStartRequestSubjectCardAuthenticatorAirKey = {
  claim: {
    puids: [
      "puids",
      "puids",
    ],
  },
  testMode: "testMode",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      | Example                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `claim`                                                                                                                                          | [components.AuthStartRequestSubjectCardAuthenticatorAirKeyClaim](../../models/components/authstartrequestsubjectcardauthenticatorairkeyclaim.md) | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              | {<br/>"puids": [<br/>"puids",<br/>"puids"<br/>]<br/>}                                                                                            |
| `testMode`                                                                                                                                       | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              |                                                                                                                                                  |