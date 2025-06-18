# V3UnifyStatusResponse

## Example Usage

```typescript
import { V3UnifyStatusResponse } from "@prove-identity/prove-api/models/components";

let value: V3UnifyStatusResponse = {
  phoneNumber: "2001004011",
  success: "true",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `phoneNumber`                                                                                                  | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The number of the mobile phone used during the process.                                                        | 2001004011                                                                                                     |
| `success`                                                                                                      | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The result of the possession check.<br/>Possible values are `true`, `false`, `pending`, and `possession_required`. | true                                                                                                           |