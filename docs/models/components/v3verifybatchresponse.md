# V3VerifyBatchResponse

## Example Usage

```typescript
import { V3VerifyBatchResponse } from "@prove-identity/prove-api/models/components";

let value: V3VerifyBatchResponse = {
  clientRequestId: "71010d88-d0e7-4a24-9297-d1be6fefde81",
  correlationId: "713189b8-5555-4b08-83ba-75d08780aebd",
  results: [
    {
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
          clientHumanId: "7bfbb91d-9df8-4ec0-99a6-de05ecc23a9e",
          dateOfBirth: "dateOfBirth",
          emails: [
            "emails",
            "emails",
          ],
          firstName: "Elena",
          lastName: "Coldman",
          maxAge: 25,
          minAge: 18,
          nationalId: "nationalId",
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
          clientHumanId: "7bfbb91d-9df8-4ec0-99a6-de05ecc23a9e",
          dateOfBirth: "dateOfBirth",
          emails: [
            "emails",
            "emails",
          ],
          firstName: "Elena",
          lastName: "Coldman",
          maxAge: 25,
          minAge: 18,
          nationalId: "nationalId",
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
      error: "",
      evaluation: {
        "authentication": {},
        "identification": {},
        "success": {},
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
        assuranceLevel: "AL2",
        clientHumanId: "7bfbb91d-9df8-4ec0-99a6-de05ecc23a9e",
        dateOfBirth: "dateOfBirth",
        emails: [
          "emails",
          "emails",
        ],
        firstName: "Elena",
        lastName: "Coldman",
        maxAge: 25,
        minAge: 18,
        nationalId: "nationalId",
        reasons: [
          "[AL1a]",
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
      success: "true",
    },
    {
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
          clientHumanId: "7bfbb91d-9df8-4ec0-99a6-de05ecc23a9e",
          dateOfBirth: "dateOfBirth",
          emails: [
            "emails",
            "emails",
          ],
          firstName: "Elena",
          lastName: "Coldman",
          maxAge: 25,
          minAge: 18,
          nationalId: "nationalId",
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
          clientHumanId: "7bfbb91d-9df8-4ec0-99a6-de05ecc23a9e",
          dateOfBirth: "dateOfBirth",
          emails: [
            "emails",
            "emails",
          ],
          firstName: "Elena",
          lastName: "Coldman",
          maxAge: 25,
          minAge: 18,
          nationalId: "nationalId",
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
      error: "",
      evaluation: {
        "authentication": {},
        "risk": {},
        "success": {},
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
        assuranceLevel: "AL0",
        clientHumanId: "21858b01-4cb9-4b14-a2d4-11e241e757dc",
        dateOfBirth: "dateOfBirth",
        emails: [
          "emails",
          "emails",
        ],
        firstName: "Alf",
        lastName: "Novotni",
        maxAge: 25,
        minAge: 18,
        nationalId: "nationalId",
        reasons: [
          "[AL0b]",
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
      phoneNumber: "2001004054",
      proveAccountId: "9e319768-19c3-4a15-9b8e-708a085933c1",
      proveId: "a07b94ce-218c-461f-beda-d92480e40f61",
      provePhoneAlias:
        "4B2C41FC4VKDEO100F960011D0AD4A8050MEK19P4SF9PD23EFE27CD2C76A6FAA8375E60AC0550604F6G32D9ED60E06262CCC570F3C15F2D16900184E",
      success: "false",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                                                                  | Example                                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `clientRequestId`                                                                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                           | A client-generated unique ID for a specific session. This can be used to identify specific requests. The format of this ID is defined by the client - Prove recommends using a GUID, but any format can be accepted. Do not include Personally Identifiable Information (PII) in this field. | 71010d88-d0e7-4a24-9297-d1be6fefde81                                                                                                                                                                                                                                                         |
| `correlationId`                                                                                                                                                                                                                                                                              | *string*                                                                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                                                                           | The unique ID that Prove generates for the flow. To continue the flow, the field will also be used for each of the subsequent API calls in the same flow - it cannot be reused outside of a single flow.                                                                                     | 713189b8-5555-4b08-83ba-75d08780aebd                                                                                                                                                                                                                                                         |
| `results`                                                                                                                                                                                                                                                                                    | [components.VerifyBatchResultItem](../../models/components/verifybatchresultitem.md)[]                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                              |