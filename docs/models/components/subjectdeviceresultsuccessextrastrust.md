# SubjectDeviceResultSuccessExtrasTrust

## Example Usage

```typescript
import { SubjectDeviceResultSuccessExtrasTrust } from "@prove-identity/prove-api/models/components";

let value: SubjectDeviceResultSuccessExtrasTrust = {
  reasonCodes: [
    1,
    1,
  ],
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `reasonCodes`                                                           | *number*[]                                                              | :heavy_minus_sign:                                                      | ReasonCodes contains a list of the reason codes detected on the device. |