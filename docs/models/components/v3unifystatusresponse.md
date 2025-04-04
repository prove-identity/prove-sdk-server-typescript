# V3UnifyStatusResponse

Response body for the V3 Unify Status API

## Example Usage

```typescript
import { V3UnifyStatusResponse } from "@prove-identity/prove-api/models/components";

let value: V3UnifyStatusResponse = {
  phoneNumber: "2001004011",
  success: "success",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `phoneNumber`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | Phone number that may have been discovered via Mobile Auth during the process. | 2001004011                                                                     |
| `success`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |