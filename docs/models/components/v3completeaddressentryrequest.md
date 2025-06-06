# V3CompleteAddressEntryRequest

## Example Usage

```typescript
import { V3CompleteAddressEntryRequest } from "@prove-identity/prove-api/models/components";

let value: V3CompleteAddressEntryRequest = {
  address: "39 South Trail",
  city: "San Antonio",
  extendedAddress: "39 South Trail",
  postalCode: "78285",
  region: "TX",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `address`                                                                                | *string*                                                                                 | :heavy_minus_sign:                                                                       | The street address of the individual.                                                    | 39 South Trail                                                                           |
| `city`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | The city of the individual.                                                              | San Antonio                                                                              |
| `extendedAddress`                                                                        | *string*                                                                                 | :heavy_minus_sign:                                                                       | The apartment number or other extended address information.                              | 39 South Trail                                                                           |
| `postalCode`                                                                             | *string*                                                                                 | :heavy_minus_sign:                                                                       | The zip code of the individual. It can be either 5 digits (XXXXX) or ZIP+4 (XXXXX-XXXX). | 78285                                                                                    |
| `region`                                                                                 | *string*                                                                                 | :heavy_minus_sign:                                                                       | The state or locality of the individual.                                                 | TX                                                                                       |