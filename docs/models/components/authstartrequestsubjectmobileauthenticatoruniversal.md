# AuthStartRequestSubjectMobileAuthenticatorUniversal

## Example Usage

```typescript
import { AuthStartRequestSubjectMobileAuthenticatorUniversal } from "@prove-identity/prove-api/models/components";

let value: AuthStartRequestSubjectMobileAuthenticatorUniversal = {
  finalTargetUrl: "https://example.com/finishpage",
  testMode: "testMode",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  | Example                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `finalTargetUrl`                                                                                                                             | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | FinalTargetURL is the customer server URL that will be called back by Prove's Web page<br/>after UPK registration/verification ceremony is done. | https://example.com/finishpage                                                                                                               |
| `testMode`                                                                                                                                   | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |                                                                                                                                              |