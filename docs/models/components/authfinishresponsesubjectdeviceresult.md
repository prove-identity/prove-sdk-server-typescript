# AuthFinishResponseSubjectDeviceResult

## Example Usage

```typescript
import { AuthFinishResponseSubjectDeviceResult } from "@prove-identity/prove-api/models/components";

let value: AuthFinishResponseSubjectDeviceResult = {
  error: {
    code: 10004,
    message: "device authentication missing",
  },
  success: {
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
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                                                                                                                                                                   | Required                                                                                                                                                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                                                                                                                                                            | Example                                                                                                                                                                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `error`                                                                                                                                                                                                                                                                                                                                                                | [components.AuthFinishResponseError](../../models/components/authfinishresponseerror.md)                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                                                                                                                                                                    | {<br/>"code": 10004,<br/>"message": "device authentication missing"<br/>}                                                                                                                                                                                                                                                                                              |
| `success`                                                                                                                                                                                                                                                                                                                                                              | [components.AuthFinishResponseSubjectDeviceResultSuccess](../../models/components/authfinishresponsesubjectdeviceresultsuccess.md)                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                     | N/A                                                                                                                                                                                                                                                                                                                                                                    | {<br/>"uvLevel": 5,<br/>"createdAt": 1666394795,<br/>"claim": {<br/>"deviceId": "eba12f3a-5555-47bc-b85d-21c0cbc4b973"<br/>},<br/>"extras": {<br/>"deviceType": "deviceType",<br/>"trust": {<br/>"reasonCodes": [<br/>1,<br/>1<br/>]<br/>},<br/>"supportedUvLevel": [<br/>6,<br/>6<br/>],<br/>"keyType": "keyType",<br/>"rawSignals": {<br/>"fingerprint": {<br/>"key": "{}"<br/>}<br/>},<br/>"deviceCapabilities": [<br/>"deviceCapabilities",<br/>"deviceCapabilities"<br/>]<br/>}<br/>} |