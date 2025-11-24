# AuthStartRequestSubjectCardAuthenticators

## Example Usage

```typescript
import { AuthStartRequestSubjectCardAuthenticators } from "@prove-identity/prove-api/models/components";

let value: AuthStartRequestSubjectCardAuthenticators = {
  airKey: {
    claim: {
      puids: [
        "puids",
        "puids",
      ],
    },
    testMode: "testMode",
  },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            | Example                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `airKey`                                                                                                                               | [components.AuthStartRequestSubjectCardAuthenticatorAirKey](../../models/components/authstartrequestsubjectcardauthenticatorairkey.md) | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    | {<br/>"testMode": "testMode",<br/>"claim": {<br/>"puids": [<br/>"puids",<br/>"puids"<br/>]<br/>}<br/>}                                 |