# V3CompleteRequest

## Example Usage

```typescript
import { V3CompleteRequest } from "@prove-identity/prove-api/models/components";

let value: V3CompleteRequest = {
  correlationId: "713189b8-5555-4b08-83ba-75d08780aebd",
  individual: {
    addresses: [
      {
        address: "39 South Trail",
        city: "San Antonio",
        extendedAddress: "Apt 23",
        postalCode: "78285",
        region: "TX",
      },
    ],
    dob: "1981-01",
    emailAddresses: [
      "jdoe@example.com",
    ],
    firstName: "Tod",
    lastName: "Weedall",
    ssn: "265228370",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                                         | Type                                                                                                                                                                                                                                                                          | Required                                                                                                                                                                                                                                                                      | Description                                                                                                                                                                                                                                                                   | Example                                                                                                                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `correlationId`                                                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                            | The unique ID that Prove generates for the flow. It is returned from the Start endpoint and cannot be reused outside of a single flow.                                                                                                                                        | 713189b8-5555-4b08-83ba-75d08780aebd                                                                                                                                                                                                                                          |
| `individual`                                                                                                                                                                                                                                                                  | [components.V3CompleteIndividualRequest](../../models/components/v3completeindividualrequest.md)                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                                            | N/A                                                                                                                                                                                                                                                                           | {<br/>"firstName": "Tod",<br/>"lastName": "Weedall",<br/>"addresses": [<br/>{<br/>"address": "39 South Trail",<br/>"city": "San Antonio",<br/>"extendedAddress": "Apt 23",<br/>"postalCode": "78285",<br/>"region": "TX"<br/>}<br/>],<br/>"emailAddresses": [<br/>"jdoe@example.com"<br/>],<br/>"dob": "1981-01-17",<br/>"ssn": "265228370"<br/>} |