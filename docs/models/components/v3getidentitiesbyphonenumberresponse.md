# V3GetIdentitiesByPhoneNumberResponse

Response body for the V3 Get Identities By Phone Number API.

## Example Usage

```typescript
import { V3GetIdentitiesByPhoneNumberResponse } from "@prove-identity/prove-api/models/components";

let value: V3GetIdentitiesByPhoneNumberResponse = {
  items: [
    {
      active: true,
      carrier: "Verizon",
      clientCustomerId: "e0f78bc2-f748-4eda-9d29-d756844507fc",
      countryCode: "US",
      createdAt: 1747671792,
      creationString: "2025-05-19T16:23:12.475Z",
      deviceId: "bf9ea15d-7dfa-4bb4-a64c-6c26b53472fc",
      identityId: "e0f78bc2-f748-4eda-9d29-d756844507fc",
      lineType: "mobile",
      phoneNumber: "2001001695",
    },
    {
      active: true,
      carrier: "Verizon",
      clientCustomerId: "e0f78bc2-f748-4eda-9d29-d756844507fc",
      countryCode: "US",
      createdAt: 1747671792,
      creationString: "2025-05-19T16:23:12.475Z",
      deviceId: "bf9ea15d-7dfa-4bb4-a64c-6c26b53472fc",
      identityId: "e0f78bc2-f748-4eda-9d29-d756844507fc",
      lineType: "mobile",
      phoneNumber: "2001001695",
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `items`                                                                          | [components.LookupIdentityItem](../../models/components/lookupidentityitem.md)[] | :heavy_minus_sign:                                                               | N/A                                                                              |