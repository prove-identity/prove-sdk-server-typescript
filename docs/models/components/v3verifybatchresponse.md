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
          assuranceLevel: "AL-1",
          firstName: "Sheilakathryn",
          lastName: "Butrimovich",
          reasons: [
            "[AL-1a] (Poor quality identity)",
          ],
        },
        {
          assuranceLevel: "AL-1",
          firstName: "Sheilakathryn",
          lastName: "Butrimovich",
          reasons: [
            "[AL-1a] (Poor quality identity)",
          ],
        },
      ],
      error: "error",
      evaluation: {
        "key": {},
      },
      identity: {
        assuranceLevel: "AL-1",
        clientCustomerId: "261ffa66-961a-4f90-8d93-6c85a450633d",
        clientHumanId: "7bfbb91d-9df8-4ec0-99a6-de05ecc23a9e",
        firstName: "Sheilakathryn",
        lastName: "Butrimovich",
        proveId: "a07b94ce-218c-461f-beda-d92480e40f61",
        provePhoneAlias: "4c01021a-7d72-4286-a8f8-d32d5b0cc342",
        reasons: [
          "[AL-1a] (Poor quality identity)",
        ],
      },
      phoneNumber: "2001004011",
      success: "pending",
    },
    {
      additionalIdentities: [
        {
          assuranceLevel: "AL-1",
          firstName: "Sheilakathryn",
          lastName: "Butrimovich",
          reasons: [
            "[AL-1a] (Poor quality identity)",
          ],
        },
        {
          assuranceLevel: "AL-1",
          firstName: "Sheilakathryn",
          lastName: "Butrimovich",
          reasons: [
            "[AL-1a] (Poor quality identity)",
          ],
        },
      ],
      error: "error",
      evaluation: {
        "key": {},
      },
      identity: {
        assuranceLevel: "AL-1",
        clientCustomerId: "261ffa66-961a-4f90-8d93-6c85a450633d",
        clientHumanId: "7bfbb91d-9df8-4ec0-99a6-de05ecc23a9e",
        firstName: "Sheilakathryn",
        lastName: "Butrimovich",
        proveId: "a07b94ce-218c-461f-beda-d92480e40f61",
        provePhoneAlias: "4c01021a-7d72-4286-a8f8-d32d5b0cc342",
        reasons: [
          "[AL-1a] (Poor quality identity)",
        ],
      },
      phoneNumber: "2001004011",
      success: "pending",
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