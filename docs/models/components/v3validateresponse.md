# V3ValidateResponse

## Example Usage

```typescript
import { V3ValidateResponse } from "@prove-identity/prove-api/models/components";

let value: V3ValidateResponse = {
  challengeMissing: true,
  evaluation: {
    "key": {},
  },
  next: {
    "v3-challenge": "/v3/challenge",
  },
  phoneNumber: "2001001686",
  success: true,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `challengeMissing`                                                                                                 | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | True if a DOB or SSN needs to be passed in on the next step.                                                       | true                                                                                                               |
| `evaluation`                                                                                                       | Record<string, [components.V3ValidateResponseEvaluation](../../models/components/v3validateresponseevaluation.md)> | :heavy_minus_sign:                                                                                                 | The evaluation result for the policy                                                                               |                                                                                                                    |
| `next`                                                                                                             | Record<string, *string*>                                                                                           | :heavy_check_mark:                                                                                                 | The next set of allowed calls in the same flow.                                                                    | {<br/>"v3-challenge": "/v3/challenge"<br/>}                                                                        |
| `phoneNumber`                                                                                                      | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The number of the mobile phone for which validation was performed.                                                 | 2001001686                                                                                                         |
| `success`                                                                                                          | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | True if the phone number was validated.                                                                            | true                                                                                                               |