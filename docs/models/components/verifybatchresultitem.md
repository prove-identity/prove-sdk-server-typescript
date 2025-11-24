# VerifyBatchResultItem

## Example Usage

```typescript
import { VerifyBatchResultItem } from "@prove-identity/prove-api/models/components";

let value: VerifyBatchResultItem = {
  additionalIdentities: [
    {
      addresses: [
        {
          address: "address",
          city: "city",
          extendedAddress: "extendedAddress",
          region: "region",
          zipCode: "zipCode",
        },
        {
          address: "address",
          city: "city",
          extendedAddress: "extendedAddress",
          region: "region",
          zipCode: "zipCode",
        },
      ],
      assuranceLevel: "AL-1",
      emails: [
        "emails",
        "emails",
      ],
      firstName: "Elena",
      lastName: "Coldman",
      maxAge: 25,
      minAge: 18,
      reasons: [
        "[AL-1a] (Poor quality identity)",
      ],
    },
    {
      addresses: [
        {
          address: "address",
          city: "city",
          extendedAddress: "extendedAddress",
          region: "region",
          zipCode: "zipCode",
        },
        {
          address: "address",
          city: "city",
          extendedAddress: "extendedAddress",
          region: "region",
          zipCode: "zipCode",
        },
      ],
      assuranceLevel: "AL-1",
      emails: [
        "emails",
        "emails",
      ],
      firstName: "Elena",
      lastName: "Coldman",
      maxAge: 25,
      minAge: 18,
      reasons: [
        "[AL-1a] (Poor quality identity)",
      ],
    },
  ],
  assuranceLevel: "AL-1",
  businesses: [
    {
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
    },
    {
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
    },
  ],
  clientCustomerId: "261ffa66-961a-4f90-8d93-6c85a450633d",
  clientHumanId: "7bfbb91d-9df8-4ec0-99a6-de05ecc23a9e",
  error: "error",
  evaluation: {
    "key": {},
  },
  identity: {
    addresses: [
      {
        address: "address",
        city: "city",
        extendedAddress: "extendedAddress",
        region: "region",
        zipCode: "zipCode",
      },
      {
        address: "address",
        city: "city",
        extendedAddress: "extendedAddress",
        region: "region",
        zipCode: "zipCode",
      },
    ],
    assuranceLevel: "AL-1",
    emails: [
      "emails",
      "emails",
    ],
    firstName: "Elena",
    lastName: "Coldman",
    maxAge: 25,
    minAge: 18,
    reasons: [
      "[AL-1a] (Poor quality identity)",
    ],
  },
  linkedAccounts: [
    {
      customerName: "customerName",
      proveAccountId: "proveAccountId",
      proveId: "proveId",
    },
    {
      customerName: "customerName",
      proveAccountId: "proveAccountId",
      proveId: "proveId",
    },
  ],
  phoneNumber: "2001004053",
  proveAccountId: "9e319768-19c3-4a15-9b8e-708a085933c1",
  proveId: "a07b94ce-218c-461f-beda-d92480e40f61",
  provePhoneAlias:
    "4B2C41FC4VKDEO100F960011D0AD4A8050MEK19P4SF9PD23EFE27CD2C76A6FAA8375E60AC0550604F6G32D9ED60E06262CCC570F3C15F2D16900184E",
  success: "pending",
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                | Example                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `additionalIdentities`                                                                                                                                                                                                                                                                                                                                                                                                                                     | [components.Identity](../../models/components/identity.md)[]                                                                                                                                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                         | (required IF verificationType=VerifiedUser)                                                                                                                                                                                                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `assuranceLevel`                                                                                                                                                                                                                                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                         | Prove’s tiered confidence metric, ranging from -1 to 3, that dynamically adapts to user behavior and various authentication keys. It allows for adaptive security policies, meaning you can require different levels of verification for different types of transactions.                                                                                                                                                                                  | AL-1                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `businesses`                                                                                                                                                                                                                                                                                                                                                                                                                                               | [components.Business](../../models/components/business.md)[]                                                                                                                                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                         | TODO: usage comment. Chances are this will be a part of Identity struct.                                                                                                                                                                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `clientCustomerId`                                                                                                                                                                                                                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                         | The input ClientCustomerID.                                                                                                                                                                                                                                                                                                                                                                                                                                | 261ffa66-961a-4f90-8d93-6c85a450633d                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `clientHumanId`                                                                                                                                                                                                                                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                         | The input ClientHumanID.<br/>(required IF verificationType=VerifiedUser)                                                                                                                                                                                                                                                                                                                                                                                   | 7bfbb91d-9df8-4ec0-99a6-de05ecc23a9e                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `error`                                                                                                                                                                                                                                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                         | An error message for this corresponding specific verification.                                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `evaluation`                                                                                                                                                                                                                                                                                                                                                                                                                                               | Record<string, [components.VerifyBatchResultItemEvaluation](../../models/components/verifybatchresultitemevaluation.md)>                                                                                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                         | The evaluation result for the policy. This is an upcoming field but is not yet enabled.                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `identity`                                                                                                                                                                                                                                                                                                                                                                                                                                                 | [components.Identity](../../models/components/identity.md)                                                                                                                                                                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                        | {<br/>"emails": [<br/>"emails",<br/>"emails"<br/>],<br/>"firstName": "Elena",<br/>"lastName": "Coldman",<br/>"addresses": [<br/>{<br/>"zipCode": "zipCode",<br/>"address": "address",<br/>"city": "city",<br/>"extendedAddress": "extendedAddress",<br/>"region": "region"<br/>},<br/>{<br/>"zipCode": "zipCode",<br/>"address": "address",<br/>"city": "city",<br/>"extendedAddress": "extendedAddress",<br/>"region": "region"<br/>}<br/>],<br/>"reasons": "[AL-1a] (Poor quality identity)",<br/>"maxAge": 25,<br/>"minAge": 18,<br/>"assuranceLevel": "AL-1"<br/>} |
| `linkedAccounts`                                                                                                                                                                                                                                                                                                                                                                                                                                           | [components.LinkedAccount](../../models/components/linkedaccount.md)[]                                                                                                                                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `phoneNumber`                                                                                                                                                                                                                                                                                                                                                                                                                                              | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                         | The input phone number.                                                                                                                                                                                                                                                                                                                                                                                                                                    | 2001004053                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `proveAccountId`                                                                                                                                                                                                                                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                         | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                        | 9e319768-19c3-4a15-9b8e-708a085933c1                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `proveId`                                                                                                                                                                                                                                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                         | A Prove-generated identifier for the consumer.<br/>(required IF verificationType=VerifiedUser)                                                                                                                                                                                                                                                                                                                                                             | a07b94ce-218c-461f-beda-d92480e40f61                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `provePhoneAlias`                                                                                                                                                                                                                                                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                         | A persistent ID that uniquely identifies a telephone subscriber.<br/>(required IF verificationType=VerifiedUser)                                                                                                                                                                                                                                                                                                                                           | 4B2C41FC4VKDEO100F960011D0AD4A8050MEK19P4SF9PD23EFE27CD2C76A6FAA8375E60AC0550604F6G32D9ED60E06262CCC570F3C15F2D16900184E                                                                                                                                                                                                                                                                                                                                   |
| `success`                                                                                                                                                                                                                                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                         | The result of verification.                                                                                                                                                                                                                                                                                                                                                                                                                                | pending                                                                                                                                                                                                                                                                                                                                                                                                                                                    |