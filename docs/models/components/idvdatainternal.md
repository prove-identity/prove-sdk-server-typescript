# IDVDataInternal

## Example Usage

```typescript
import { IDVDataInternal } from "@prove-identity/prove-api/models/components";

let value: IDVDataInternal = {
  dataSource1: {
    address: {
      addressScore: 0,
      city: true,
      distance: 6.027456183070403,
      postalCode: true,
      region: true,
      street: true,
      streetNumber: 1,
    },
    cipConfidence: "cipConfidence",
    email: {
      emailAddress: true,
    },
    identifiers: {
      dob: true,
      last4: true,
      ssn: true,
    },
    name: {
      firstName: 5,
      lastName: 5,
      nameScore: 2,
    },
    reasonCodes: [
      "reasonCodes",
      "reasonCodes",
    ],
  },
  dataSource2: {
    address: {
      addressScore: 0,
      city: true,
      distance: 6.027456183070403,
      postalCode: true,
      region: true,
      street: true,
      streetNumber: 1,
    },
    cipConfidence: "cipConfidence",
    email: {
      emailAddress: true,
    },
    identifiers: {
      dob: true,
      last4: true,
      ssn: true,
    },
    name: {
      firstName: 5,
      lastName: 5,
      nameScore: 2,
    },
    reasonCodes: [
      "reasonCodes",
      "reasonCodes",
    ],
  },
  multiCIPConfidence: "multiCIPConfidence",
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                                                                                                 | Type                                                                                                                                                                                                                                                                                                                                                                                                  | Required                                                                                                                                                                                                                                                                                                                                                                                              | Description                                                                                                                                                                                                                                                                                                                                                                                           | Example                                                                                                                                                                                                                                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dataSource1`                                                                                                                                                                                                                                                                                                                                                                                         | [components.DataSourceInternal](../../models/components/datasourceinternal.md)                                                                                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                    | N/A                                                                                                                                                                                                                                                                                                                                                                                                   | {<br/>"address": {<br/>"addressScore": 0,<br/>"city": true,<br/>"distance": 6.027456183070403,<br/>"postalCode": true,<br/>"region": true,<br/>"street": true,<br/>"streetNumber": 1<br/>},<br/>"cipConfidence": "cipConfidence",<br/>"email": {<br/>"emailAddress": true<br/>},<br/>"identifiers": {<br/>"dob": true,<br/>"last4": true,<br/>"ssn": true<br/>},<br/>"name": {<br/>"firstName": 5,<br/>"lastName": 5,<br/>"nameScore": 2<br/>},<br/>"reasonCodes": [<br/>"reasonCodes",<br/>"reasonCodes"<br/>]<br/>} |
| `dataSource2`                                                                                                                                                                                                                                                                                                                                                                                         | [components.DataSourceInternal](../../models/components/datasourceinternal.md)                                                                                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                    | N/A                                                                                                                                                                                                                                                                                                                                                                                                   | {<br/>"address": {<br/>"addressScore": 0,<br/>"city": true,<br/>"distance": 6.027456183070403,<br/>"postalCode": true,<br/>"region": true,<br/>"street": true,<br/>"streetNumber": 1<br/>},<br/>"cipConfidence": "cipConfidence",<br/>"email": {<br/>"emailAddress": true<br/>},<br/>"identifiers": {<br/>"dob": true,<br/>"last4": true,<br/>"ssn": true<br/>},<br/>"name": {<br/>"firstName": 5,<br/>"lastName": 5,<br/>"nameScore": 2<br/>},<br/>"reasonCodes": [<br/>"reasonCodes",<br/>"reasonCodes"<br/>]<br/>} |
| `multiCIPConfidence`                                                                                                                                                                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                    | N/A                                                                                                                                                                                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                                                                                                                                       |