# AuthFinishResponseSubjectCardsResult

## Example Usage

```typescript
import { AuthFinishResponseSubjectCardsResult } from "@prove-identity/prove-api/models/components";

let value: AuthFinishResponseSubjectCardsResult = {
  error: {
    code: 10004,
    message: "device authentication missing",
    puid: "puid",
  },
  success: {
    authenticatorType: "authenticatorType",
    claim: {
      puid: "puid",
    },
    createdAt: 1666394795,
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `error`                                                                                                                        | [components.AuthFinishResponseCardError](../../models/components/authfinishresponsecarderror.md)                               | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            | {<br/>"code": 10004,<br/>"puid": "puid",<br/>"message": "device authentication missing"<br/>}                                  |
| `success`                                                                                                                      | [components.AuthFinishResponseSubjectCardResultSuccess](../../models/components/authfinishresponsesubjectcardresultsuccess.md) | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            | {<br/>"createdAt": 1666394795,<br/>"authenticatorType": "authenticatorType",<br/>"claim": {<br/>"puid": "puid"<br/>}<br/>}     |