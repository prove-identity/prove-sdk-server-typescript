# AuthContinueRequestSubjects

## Example Usage

```typescript
import { AuthContinueRequestSubjects } from "@prove-identity/prove-api/models/components";

let value: AuthContinueRequestSubjects = {
  mobile: {
    claim: {
      mobileNumber: "12065550100",
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `mobile`                                                                                                   | [components.AuthContinueRequestSubjectMobile](../../models/components/authcontinuerequestsubjectmobile.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        | {<br/>"claim": {<br/>"mobileNumber": "12065550100"<br/>}<br/>}                                             |