# V3VerifyResponse

## Example Usage

```typescript
import { V3VerifyResponse } from "@prove-identity/prove-api/models/components";

let value: V3VerifyResponse = {
  additionalIdentities: [
    {
      assuranceLevel: "AL-1",
      firstName: "Elena",
      lastName: "Coldman",
      reasons: [
        "[AL-1a] (Poor quality identity)",
      ],
    },
    {
      assuranceLevel: "AL-1",
      firstName: "Elena",
      lastName: "Coldman",
      reasons: [
        "[AL-1a] (Poor quality identity)",
      ],
    },
  ],
  clientCustomerId: "261ffa66-961a-4f90-8d93-6c85a450633d",
  clientHumanId: "261ffa66-961a-4f90-8d93-6c85a450633d",
  clientRequestId: "71010d88-d0e7-4a24-9297-d1be6fefde81",
  correlationId: "713189b8-5555-4b08-83ba-75d08780aebd",
  evaluation: {
    "authentication": {},
    "identification": {},
  },
  identity: {
    assuranceLevel: "AL2",
    firstName: "Elena",
    lastName: "Coldman",
    reasons: [
      "[AL2a]",
    ],
  },
  phoneNumber: "2001004053",
  proveId: "a07b94ce-218c-461f-beda-d92480e40f61",
  provePhoneAlias:
    "4B2C41FC4VKDEO100F960011D0AD4A8050MEK19P4SF9PD23EFE27CD2C76A6FAA8375E60AC0550604F6G32D9ED60E06262CCC570F3C15F2D16900184E",
  success: "true",
};
```

## Fields

| Field                                                                                                                                               | Type                                                                                                                                                | Required                                                                                                                                            | Description                                                                                                                                         | Example                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `additionalIdentities`                                                                                                                              | [components.Identity](../../models/components/identity.md)[]                                                                                        | :heavy_minus_sign:                                                                                                                                  | Additional Identities found as part of the verification flow.                                                                                       |                                                                                                                                                     |
| `clientCustomerId`                                                                                                                                  | *string*                                                                                                                                            | :heavy_minus_sign:                                                                                                                                  | The input ClientCustomerID.                                                                                                                         | 261ffa66-961a-4f90-8d93-6c85a450633d                                                                                                                |
| `clientHumanId`                                                                                                                                     | *string*                                                                                                                                            | :heavy_minus_sign:                                                                                                                                  | The input ClientHumanID.                                                                                                                            | 261ffa66-961a-4f90-8d93-6c85a450633d                                                                                                                |
| `clientRequestId`                                                                                                                                   | *string*                                                                                                                                            | :heavy_minus_sign:                                                                                                                                  | The input ClientRequestID.                                                                                                                          | 71010d88-d0e7-4a24-9297-d1be6fefde81                                                                                                                |
| `correlationId`                                                                                                                                     | *string*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | The unique ID that Prove generates for the flow.                                                                                                    | 713189b8-5555-4b08-83ba-75d08780aebd                                                                                                                |
| `evaluation`                                                                                                                                        | Record<string, [components.V3VerifyResponseEvaluation](../../models/components/v3verifyresponseevaluation.md)>                                      | :heavy_minus_sign:                                                                                                                                  | The evaluation result for the policy. This will contain keys titled "authentication" and "risk" that encompass the different evaluation categories. |                                                                                                                                                     |
| `identity`                                                                                                                                          | [components.Identity](../../models/components/identity.md)                                                                                          | :heavy_minus_sign:                                                                                                                                  | N/A                                                                                                                                                 | {<br/>"firstName": "Elena",<br/>"lastName": "Coldman",<br/>"reasons": "[AL-1a] (Poor quality identity)",<br/>"assuranceLevel": "AL-1"<br/>}         |
| `phoneNumber`                                                                                                                                       | *string*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | The input phone number.                                                                                                                             | 2001004053                                                                                                                                          |
| `proveId`                                                                                                                                           | *string*                                                                                                                                            | :heavy_minus_sign:                                                                                                                                  | A Prove-generated identifier for the consumer.                                                                                                      | a07b94ce-218c-461f-beda-d92480e40f61                                                                                                                |
| `provePhoneAlias`                                                                                                                                   | *string*                                                                                                                                            | :heavy_minus_sign:                                                                                                                                  | A persistent ID that uniquely identifies a telephone subscriber.                                                                                    | 4B2C41FC4VKDEO100F960011D0AD4A8050MEK19P4SF9PD23EFE27CD2C76A6FAA8375E60AC0550604F6G32D9ED60E06262CCC570F3C15F2D16900184E                            |
| `success`                                                                                                                                           | *string*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | The result of verification. This can be "true" or "false".                                                                                          | true                                                                                                                                                |