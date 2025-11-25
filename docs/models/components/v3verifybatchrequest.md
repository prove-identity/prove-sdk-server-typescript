# V3VerifyBatchRequest

## Example Usage

```typescript
import { V3VerifyBatchRequest } from "@prove-identity/prove-api/models/components";

let value: V3VerifyBatchRequest = {
  clientRequestId: "3d1215f7-ec3f-4fd2-9894-7b46f00e31a6",
  items: [
    {
      clientCustomerId: "e0f78bc2-f748-4eda-9d29-d756844507fc",
      clientHumanId: "clientHumanId",
      emailAddress: "ecoldman1h@storify.com",
      firstName: "Elena",
      ipAddress: "192.168.1.1",
      lastName: "Coldman",
      phoneNumber: "2001004053",
      proveId: "e0f78bc2-f748-4eda-9d29-d756844507fc",
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0",
      verificationType: "verifiedUser",
    },
    {
      clientCustomerId: "e0f78bc2-f748-4eda-9d29-d756844507fc",
      clientHumanId: "clientHumanId",
      emailAddress: "ecoldman1h@storify.com",
      firstName: "Elena",
      ipAddress: "192.168.1.1",
      lastName: "Coldman",
      phoneNumber: "2001004053",
      proveId: "e0f78bc2-f748-4eda-9d29-d756844507fc",
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0",
      verificationType: "verifiedUser",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                                                                  | Example                                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `clientRequestId`                                                                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                           | A client-generated unique ID for a specific session. This can be used to identify specific requests. The format of this ID is defined by the client - Prove recommends using a GUID, but any format can be accepted. Do not include Personally Identifiable Information (PII) in this field. | 3d1215f7-ec3f-4fd2-9894-7b46f00e31a6                                                                                                                                                                                                                                                         |
| `items`                                                                                                                                                                                                                                                                                      | [components.VerifyBatchRequestItem](../../models/components/verifybatchrequestitem.md)[]                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                                                                           | Batch of verify requests to process. The array length cannot exceed 1000 items.                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                              |