# AuthFinishResponseSubjectCardResultSuccess

## Example Usage

```typescript
import { AuthFinishResponseSubjectCardResultSuccess } from "@prove-identity/prove-api/models/components";

let value: AuthFinishResponseSubjectCardResultSuccess = {
  authenticatorType: "authenticatorType",
  claim: {
    puid: "puid",
  },
  createdAt: 1666394795,
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              | Example                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `authenticatorType`                                                                                                                      | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |                                                                                                                                          |
| `claim`                                                                                                                                  | [components.AuthFinishResponseSubjectCardResultSuccessClaim](../../models/components/authfinishresponsesubjectcardresultsuccessclaim.md) | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      | {<br/>"puid": "puid"<br/>}                                                                                                               |
| `createdAt`                                                                                                                              | *number*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | CreatedAt field is in Unix time which is the number of seconds elapsed since January 1, 1970 UTC.                                        | 1666394795                                                                                                                               |