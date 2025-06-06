# V3CompleteIndividualRequest

## Example Usage

```typescript
import { V3CompleteIndividualRequest } from "@prove-identity/prove-api/models/components";

let value: V3CompleteIndividualRequest = {
  addresses: [
    {
      address: "39 South Trail",
      city: "San Antonio",
      extendedAddress: "Apt 23",
      postalCode: "78285",
      region: "TX",
    },
  ],
  dob: "1981-01-17",
  emailAddresses: [
    "jdoe@example.com",
  ],
  firstName: "Tod",
  lastName: "Weedall",
  ssn: "265228370",
};
```

## Fields

| Field                                                                                                                                           | Type                                                                                                                                            | Required                                                                                                                                        | Description                                                                                                                                     | Example                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `addresses`                                                                                                                                     | [components.V3CompleteAddressEntryRequest](../../models/components/v3completeaddressentryrequest.md)[]                                          | :heavy_minus_sign:                                                                                                                              | Address of the individual. Note that though this is an array, only the first address in the array will be processed.                            | [<br/>{<br/>"address": "39 South Trail",<br/>"city": "San Antonio",<br/>"extendedAddress": "Apt 23",<br/>"postalCode": "78285",<br/>"region": "TX"<br/>}<br/>] |
| `dob`                                                                                                                                           | *string*                                                                                                                                        | :heavy_minus_sign:                                                                                                                              | The date of birth of the individual in one of these formats: YYYY-MM-DD, YYYY-MM, or MM-DD. Acceptable characters are: numeric with symbol '-'. | 1981-01                                                                                                                                         |
| `emailAddresses`                                                                                                                                | *string*[]                                                                                                                                      | :heavy_minus_sign:                                                                                                                              | Email address of the individual. Note that though this is an array, only the first email address in the array will be processed.                | [<br/>"jdoe@example.com"<br/>]                                                                                                                  |
| `firstName`                                                                                                                                     | *string*                                                                                                                                        | :heavy_minus_sign:                                                                                                                              | The first name of the individual.                                                                                                               | Tod                                                                                                                                             |
| `lastName`                                                                                                                                      | *string*                                                                                                                                        | :heavy_minus_sign:                                                                                                                              | The last name of the individual.                                                                                                                | Weedall                                                                                                                                         |
| `ssn`                                                                                                                                           | *string*                                                                                                                                        | :heavy_minus_sign:                                                                                                                              | The social security number of the individual.                                                                                                   | 265228370                                                                                                                                       |