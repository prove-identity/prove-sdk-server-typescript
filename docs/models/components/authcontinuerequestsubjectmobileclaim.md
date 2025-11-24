# AuthContinueRequestSubjectMobileClaim

## Example Usage

```typescript
import { AuthContinueRequestSubjectMobileClaim } from "@prove-identity/prove-api/models/components";

let value: AuthContinueRequestSubjectMobileClaim = {
  mobileNumber: "12065550100",
};
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    | Example                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mobileNumber`                                                                                                                                                 | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | MobileNumber to bind to the device. Mobile number may be prefixed with a plus sign, but does not need to be for<br/>US. A plus sign is required for international. | 12065550100                                                                                                                                                    |