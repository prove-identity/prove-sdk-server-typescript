# AuthStartRequestSubjectUserAuthenticators

## Example Usage

```typescript
import { AuthStartRequestSubjectUserAuthenticators } from "@prove-identity/prove-api/models/components";

let value: AuthStartRequestSubjectUserAuthenticators = {
  docv: {},
  passive: {
    userVerificationLevel: "userVerificationLevel",
  },
  ppb: {},
  present: {},
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              | Example                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `docv`                                                                                                                                   | [components.Docv](../../models/components/docv.md)                                                                                       | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |                                                                                                                                          |
| `passive`                                                                                                                                | [components.AuthStartRequestSubjectUserAuthenticatorPassive](../../models/components/authstartrequestsubjectuserauthenticatorpassive.md) | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      | {<br/>"userVerificationLevel": "userVerificationLevel"<br/>}                                                                             |
| `ppb`                                                                                                                                    | [components.Ppb](../../models/components/ppb.md)                                                                                         | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |                                                                                                                                          |
| `present`                                                                                                                                | [components.Present](../../models/components/present.md)                                                                                 | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |                                                                                                                                          |