# Business

## Example Usage

```typescript
import { Business } from "@prove-identity/prove-api/models/components";

let value: Business = {
  businessAddress: {
    address: "address",
    city: "city",
    extendedAddress: "extendedAddress",
    region: "region",
    zipCode: "zipCode",
  },
  businessName: "businessName",
  registrationFiling: {
    date: new Date("2000-01-23T04:56:07Z"),
    region: "region",
    registrationType: "registrationType",
  },
  relatedPersons: [
    {
      firstName: "firstName",
      lastName: "lastName",
      middleName: "middleName",
      title: "title",
    },
    {
      firstName: "firstName",
      lastName: "lastName",
      middleName: "middleName",
      title: "title",
    },
  ],
  taxId: "taxId",
  tradeName: "tradeName",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `businessAddress`                                                                                                        | [components.BusinessAddress](../../models/components/businessaddress.md)                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      | {<br/>"zipCode": "zipCode",<br/>"address": "address",<br/>"city": "city",<br/>"extendedAddress": "extendedAddress",<br/>"region": "region"<br/>} |
| `businessName`                                                                                                           | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |                                                                                                                          |
| `registrationFiling`                                                                                                     | [components.RegistrationFiling](../../models/components/registrationfiling.md)                                           | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      | {<br/>"date": "2000-01-23T04:56:07Z",<br/>"registrationType": "registrationType",<br/>"region": "region"<br/>}           |
| `relatedPersons`                                                                                                         | [components.RelatedPerson](../../models/components/relatedperson.md)[]                                                   | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |                                                                                                                          |
| `taxId`                                                                                                                  | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |                                                                                                                          |
| `tradeName`                                                                                                              | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |                                                                                                                          |