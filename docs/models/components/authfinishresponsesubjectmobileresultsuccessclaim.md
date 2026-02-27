# AuthFinishResponseSubjectMobileResultSuccessClaim

## Example Usage

```typescript
import { AuthFinishResponseSubjectMobileResultSuccessClaim } from "@prove-identity/prove-api/models/components";

let value: AuthFinishResponseSubjectMobileResultSuccessClaim = {
  mobileNumber: "12065550100",
};
```

## Fields

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  | Example                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `mobileNumber`                                                                                                                                               | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | MobileNumber bound to the device. Mobile number may be prefixed with a plus sign, but does not need to be for<br/>US. A plus sign is required for international. | 12065550100                                                                                                                                                  |