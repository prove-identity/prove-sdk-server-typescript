# V3DomainLinkedResponse

## Example Usage

```typescript
import { V3DomainLinkedResponse } from "@prove-identity/prove-api/models/components";

let value: V3DomainLinkedResponse = {
  linkedFrom: [
    {
      acceptedAt: 0,
      acceptedString: "acceptedString",
      name: "name",
      pcid: "pcid",
      scopes: [
        "scopes",
        "scopes",
      ],
    },
    {
      acceptedAt: 0,
      acceptedString: "acceptedString",
      name: "name",
      pcid: "pcid",
      scopes: [
        "scopes",
        "scopes",
      ],
    },
  ],
  linkedTo: [
    {
      acceptedAt: 6,
      acceptedString: "acceptedString",
      name: "name",
      pcid: "pcid",
      scopes: [
        "scopes",
        "scopes",
      ],
    },
    {
      acceptedAt: 6,
      acceptedString: "acceptedString",
      name: "name",
      pcid: "pcid",
      scopes: [
        "scopes",
        "scopes",
      ],
    },
  ],
  requestsFrom: [
    {
      name: "name",
      pcid: "pcid",
      requestedAt: 1,
      requestedString: "requestedString",
      scopes: [
        "scopes",
        "scopes",
      ],
    },
    {
      name: "name",
      pcid: "pcid",
      requestedAt: 1,
      requestedString: "requestedString",
      scopes: [
        "scopes",
        "scopes",
      ],
    },
  ],
  requestsTo: [
    {
      name: "name",
      pcid: "pcid",
      requestedAt: 5,
      requestedString: "requestedString",
      scopes: [
        "scopes",
        "scopes",
      ],
    },
    {
      name: "name",
      pcid: "pcid",
      requestedAt: 5,
      requestedString: "requestedString",
      scopes: [
        "scopes",
        "scopes",
      ],
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `linkedFrom`                                                         | [components.LinkedFrom](../../models/components/linkedfrom.md)[]     | :heavy_minus_sign:                                                   | N/A                                                                  |
| `linkedTo`                                                           | [components.LinkedTo](../../models/components/linkedto.md)[]         | :heavy_minus_sign:                                                   | N/A                                                                  |
| `requestsFrom`                                                       | [components.RequestsFrom](../../models/components/requestsfrom.md)[] | :heavy_minus_sign:                                                   | N/A                                                                  |
| `requestsTo`                                                         | [components.RequestsTo](../../models/components/requeststo.md)[]     | :heavy_minus_sign:                                                   | N/A                                                                  |