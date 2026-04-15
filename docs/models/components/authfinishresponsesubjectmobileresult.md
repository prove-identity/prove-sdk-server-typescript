# AuthFinishResponseSubjectMobileResult

## Example Usage

```typescript
import { AuthFinishResponseSubjectMobileResult } from "@prove-identity/prove-api/models/components";

let value: AuthFinishResponseSubjectMobileResult = {
  error: {
    code: 10004,
    message: "device authentication missing",
  },
  success: {
    authenticatorType: "instant",
    claim: {
      mobileNumber: "12065550100",
    },
    createdAt: 1666394795,
    extras: {
      ipMatch: "failure",
      linkClicked: true,
      mobileCountryCode: "310",
      mobileOperatorName: "Verizon",
      payfoneAlias: "37C2666C4VKR...",
      phoneMatch: "success",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                     | Type                                                                                                                                                                                                                                                                                      | Required                                                                                                                                                                                                                                                                                  | Description                                                                                                                                                                                                                                                                               | Example                                                                                                                                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `error`                                                                                                                                                                                                                                                                                   | [components.AuthFinishResponseError](../../models/components/authfinishresponseerror.md)                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                                                                                       | {<br/>"code": 10004,<br/>"message": "device authentication missing"<br/>}                                                                                                                                                                                                                 |
| `success`                                                                                                                                                                                                                                                                                 | [components.AuthFinishResponseSubjectMobileResultSuccess](../../models/components/authfinishresponsesubjectmobileresultsuccess.md)                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                                                                                       | {<br/>"createdAt": 1666394795,<br/>"authenticatorType": "instant",<br/>"claim": {<br/>"mobileNumber": "12065550100"<br/>},<br/>"extras": {<br/>"payfoneAlias": "37C2666C4VKR...",<br/>"mobileCountryCode": "310",<br/>"phoneMatch": "success",<br/>"ipMatch": "failure",<br/>"mobileOperatorName": "Verizon",<br/>"linkClicked": true<br/>}<br/>} |