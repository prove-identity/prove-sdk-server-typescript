# V3CrossDomainIdentityResponse

Response body for the V3 Identity Cross Domain API.

## Example Usage

```typescript
import { V3CrossDomainIdentityResponse } from "@prove-identity/prove-api/models/components";

let value: V3CrossDomainIdentityResponse = {
  count: 5,
  identites: [
    {
      clientName: "Client A",
      identityId: "e0f78bc2-f748-4eda-9d29-d756844507fc",
      pcid: "12345",
    },
  ],
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `count`                                                                                                 | *number*                                                                                                | :heavy_check_mark:                                                                                      | The number of items in the Identities array.                                                            | 5                                                                                                       |
| `identites`                                                                                             | [components.IdentityItem](../../models/components/identityitem.md)[]                                    | :heavy_check_mark:                                                                                      | The list of identities from other linked accounts.                                                      | [<br/>{<br/>"clientName": "Client A",<br/>"identityId": "e0f78bc2-f748-4eda-9d29-d756844507fc",<br/>"pcid": "12345"<br/>}<br/>] |