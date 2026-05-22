# DataSourceInternal

## Example Usage

```typescript
import { DataSourceInternal } from "@prove-identity/prove-api/models/components";

let value: DataSourceInternal = {
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
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               | Example                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `address`                                                                                                                                 | [components.DataSourceAddressResponseInternal](../../models/components/datasourceaddressresponseinternal.md)                              | :heavy_minus_sign:                                                                                                                        | N/A                                                                                                                                       | {<br/>"addressScore": 0,<br/>"city": true,<br/>"distance": 6.027456183070403,<br/>"postalCode": true,<br/>"region": true,<br/>"street": true,<br/>"streetNumber": 1<br/>} |
| `cipConfidence`                                                                                                                           | *string*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | N/A                                                                                                                                       |                                                                                                                                           |
| `email`                                                                                                                                   | [components.DataSourceEmailAddressResponseInternal](../../models/components/datasourceemailaddressresponseinternal.md)                    | :heavy_minus_sign:                                                                                                                        | N/A                                                                                                                                       | {<br/>"emailAddress": true<br/>}                                                                                                          |
| `identifiers`                                                                                                                             | [components.DataSourceIdentifiersResponseInternal](../../models/components/datasourceidentifiersresponseinternal.md)                      | :heavy_minus_sign:                                                                                                                        | N/A                                                                                                                                       | {<br/>"dob": true,<br/>"last4": true,<br/>"ssn": true<br/>}                                                                               |
| `name`                                                                                                                                    | [components.DataSourceNameResponseInternal](../../models/components/datasourcenameresponseinternal.md)                                    | :heavy_minus_sign:                                                                                                                        | N/A                                                                                                                                       | {<br/>"firstName": 5,<br/>"lastName": 5,<br/>"nameScore": 2<br/>}                                                                         |
| `reasonCodes`                                                                                                                             | *string*[]                                                                                                                                | :heavy_minus_sign:                                                                                                                        | N/A                                                                                                                                       |                                                                                                                                           |