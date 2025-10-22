# V3VerifyBatchRequest

## Example Usage

```typescript
import { V3VerifyBatchRequest } from "@prove-identity/prove-api/models/components";

let value: V3VerifyBatchRequest = {
  clientRequestId: "clientRequestId",
  items: [
    {
      clientCustomerId: "e0f78bc2-f748-4eda-9d29-d756844507fc",
      clientHumanId: "clientHumanId",
      emailAddress: "sbutrimovichb@who.int",
      firstName: "Sheilakathryn",
      ipAddress: "192.168.1.1",
      lastName: "Butrimovich",
      phoneNumber: "2001004011",
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0",
      verificationType: "verificationType",
    },
    {
      clientCustomerId: "e0f78bc2-f748-4eda-9d29-d756844507fc",
      clientHumanId: "clientHumanId",
      emailAddress: "sbutrimovichb@who.int",
      firstName: "Sheilakathryn",
      ipAddress: "192.168.1.1",
      lastName: "Butrimovich",
      phoneNumber: "2001004011",
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0",
      verificationType: "verificationType",
    },
  ],
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `clientRequestId`                                                               | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `items`                                                                         | [components.VerifyItem](../../models/components/verifyitem.md)[]                | :heavy_check_mark:                                                              | Batch of verify requests to process. The array length cannot exceed 1000 items. |