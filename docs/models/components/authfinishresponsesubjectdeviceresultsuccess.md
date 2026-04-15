# AuthFinishResponseSubjectDeviceResultSuccess

## Example Usage

```typescript
import { AuthFinishResponseSubjectDeviceResultSuccess } from "@prove-identity/prove-api/models/components";

let value: AuthFinishResponseSubjectDeviceResultSuccess = {
  claim: {
    deviceId: "eba12f3a-5555-47bc-b85d-21c0cbc4b973",
  },
  createdAt: 1666394795,
  extras: {
    deviceCapabilities: [
      "deviceCapabilities",
      "deviceCapabilities",
    ],
    deviceType: "deviceType",
    keyType: "keyType",
    rawSignals: {
      fingerprint: {
        "key": {},
      },
    },
    supportedUvLevel: [
      6,
      6,
    ],
    trust: {
      reasonCodes: [
        1,
        1,
      ],
    },
  },
  uvLevel: 5,
};
```

## Fields

| Field                                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                                      | Example                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `claim`                                                                                                                                                                                                                                          | [components.AuthFinishResponseSubjectDeviceResultSuccessClaim](../../models/components/authfinishresponsesubjectdeviceresultsuccessclaim.md)                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                                              | {<br/>"deviceId": "eba12f3a-5555-47bc-b85d-21c0cbc4b973"<br/>}                                                                                                                                                                                   |
| `createdAt`                                                                                                                                                                                                                                      | *number*                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                               | CreatedAt field is in Unix time which is the number of seconds elapsed since January 1, 1970 UTC.                                                                                                                                                | 1666394795                                                                                                                                                                                                                                       |
| `extras`                                                                                                                                                                                                                                         | [components.AuthFinishResponseSubjectDeviceResultSuccessExtras](../../models/components/authfinishresponsesubjectdeviceresultsuccessextras.md)                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                                              | {<br/>"deviceType": "deviceType",<br/>"trust": {<br/>"reasonCodes": [<br/>1,<br/>1<br/>]<br/>},<br/>"supportedUvLevel": [<br/>6,<br/>6<br/>],<br/>"keyType": "keyType",<br/>"rawSignals": {<br/>"fingerprint": {<br/>"key": "{}"<br/>}<br/>},<br/>"deviceCapabilities": [<br/>"deviceCapabilities",<br/>"deviceCapabilities"<br/>]<br/>} |
| `uvLevel`                                                                                                                                                                                                                                        | *number*                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                               | UserVerificationLevel is the level that was performed during device passive authentication.                                                                                                                                                      |                                                                                                                                                                                                                                                  |