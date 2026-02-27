# AuthFinishResponseSubjectMobileResultSuccess

## Example Usage

```typescript
import { AuthFinishResponseSubjectMobileResultSuccess } from "@prove-identity/prove-api/models/components";

let value: AuthFinishResponseSubjectMobileResultSuccess = {
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
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            | Example                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `authenticatorType`                                                                                                                                                    | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | AuthenticatorType specifies the type of authenticator used in the auth flow. Values: instant, passive, and<br/>provided.                                               | instant                                                                                                                                                                |
| `claim`                                                                                                                                                                | [components.AuthFinishResponseSubjectMobileResultSuccessClaim](../../models/components/authfinishresponsesubjectmobileresultsuccessclaim.md)                           | :heavy_minus_sign:                                                                                                                                                     | N/A                                                                                                                                                                    | {<br/>"mobileNumber": "12065550100"<br/>}                                                                                                                              |
| `createdAt`                                                                                                                                                            | *number*                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                     | CreatedAt field is in Unix time which is the number of seconds elapsed since January 1, 1970 UTC.                                                                      | 1666394795                                                                                                                                                             |
| `extras`                                                                                                                                                               | [components.AuthFinishResponseSubjectMobileResultSuccessExtras](../../models/components/authfinishresponsesubjectmobileresultsuccessextras.md)                         | :heavy_minus_sign:                                                                                                                                                     | N/A                                                                                                                                                                    | {<br/>"payfoneAlias": "37C2666C4VKR...",<br/>"mobileCountryCode": "310",<br/>"phoneMatch": "success",<br/>"ipMatch": "failure",<br/>"mobileOperatorName": "Verizon",<br/>"linkClicked": true<br/>} |