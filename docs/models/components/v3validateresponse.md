# V3ValidateResponse

## Example Usage

```typescript
import { V3ValidateResponse } from "@prove-identity/prove-api/models/components";

let value: V3ValidateResponse = {
    challengeMissing: true,
    next: {
        "v3-challenge": "/v3/challenge",
    },
    phoneNumber: "2001001686",
    success: true,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `challengeMissing`                                                                     | *boolean*                                                                              | :heavy_check_mark:                                                                     | Challenge missing returns true if a DOB or SSN needs to be passed in on the next step. | true                                                                                   |
| `next`                                                                                 | Record<string, *string*>                                                               | :heavy_check_mark:                                                                     | Next contains the next set of allowed calls in the same flow.                          | {<br/>"v3-challenge": "/v3/challenge"<br/>}                                            |
| `phoneNumber`                                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | PhoneNumber is the number of the mobile phone for which validation was performed.      | 2001001686                                                                             |
| `success`                                                                              | *boolean*                                                                              | :heavy_check_mark:                                                                     | Success returns true if the phone number was validated.                                | true                                                                                   |