# IdentityItem

## Example Usage

```typescript
import { IdentityItem } from "@prove-identity/prove-api/models/components";

let value: IdentityItem = {
  clientName: "\"Client A\"",
  identityId: "\"e0f78bc2-f748-4eda-9d29-d756844507fc\"",
  pcid: "\"12345\"",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `clientName`                                               | *string*                                                   | :heavy_check_mark:                                         | The name of the client associated with the identity.       | "Client A"                                                 |
| `identityId`                                               | *string*                                                   | :heavy_check_mark:                                         | The Prove-generated unique ID for the specific identity.   | "e0f78bc2-f748-4eda-9d29-d756844507fc"                     |
| `pcid`                                                     | *string*                                                   | :heavy_check_mark:                                         | The Prove Customer ID (PCID) associated with the identity. | "12345"                                                    |