# AuthFinishResponseSubjectDeviceResultSuccessExtras

## Example Usage

```typescript
import { AuthFinishResponseSubjectDeviceResultSuccessExtras } from "@prove-identity/prove-api/models/components";

let value: AuthFinishResponseSubjectDeviceResultSuccessExtras = {
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
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               | Example                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `deviceCapabilities`                                                                                                      | *string*[]                                                                                                                | :heavy_minus_sign:                                                                                                        | DeviceCapabilities contains the available device capabilities (webauthn, face, fingerprint).                              |                                                                                                                           |
| `deviceType`                                                                                                              | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | DeviceAuthType contains description of the type of client device used for auth: 'web' or 'mobile'.                        |                                                                                                                           |
| `keyType`                                                                                                                 | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | KeyType indicates the type of the key used for the authentication. This parameter is only included with UPK transactions. |                                                                                                                           |
| `rawSignals`                                                                                                              | [components.AuthFinishResponseRawSignals](../../models/components/authfinishresponserawsignals.md)                        | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       | {<br/>"fingerprint": {<br/>"key": "{}"<br/>}<br/>}                                                                        |
| `supportedUvLevel`                                                                                                        | *number*[]                                                                                                                | :heavy_minus_sign:                                                                                                        | SupportedUvLevel indicates the level of user verification supported on the device.                                        |                                                                                                                           |
| `trust`                                                                                                                   | [components.SubjectDeviceResultSuccessExtrasTrust](../../models/components/subjectdeviceresultsuccessextrastrust.md)      | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       | {<br/>"reasonCodes": [<br/>1,<br/>1<br/>]<br/>}                                                                           |