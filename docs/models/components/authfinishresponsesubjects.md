# AuthFinishResponseSubjects

## Example Usage

```typescript
import { AuthFinishResponseSubjects } from "@prove-identity/prove-api/models/components";

let value: AuthFinishResponseSubjects = {
  card: {
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
  },
  device: {
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
  },
  mobile: {
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
  },
  user: {
    error: {
      code: 10004,
      message: "device authentication missing",
    },
    success: {
      authenticatorType: "authenticatorType",
      claim: {
        userId: "userId",
      },
      createdAt: 1666394795,
      extras: {
        trust: {
          fused: 5.637376656633329,
          reasons: 2,
          subScores: {
            bluetoothConnected: 7.061401241503109,
            bluetoothPaired: 9.301444243932576,
            bluetoothScanned: 3.616076749251911,
            distance: 2.027123023002322,
            inclusion: 4.145608029883936,
            wifiConnected: 7.386281948385884,
            wifiScanned: 1.2315135367772556,
          },
        },
      },
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Example                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `card`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | [components.AuthFinishResponseSubjectCardsResult](../../models/components/authfinishresponsesubjectcardsresult.md)                                                                                                                                                                                                                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | {<br/>"success": {<br/>"createdAt": 1666394795,<br/>"authenticatorType": "authenticatorType",<br/>"claim": {<br/>"puid": "puid"<br/>}<br/>},<br/>"error": {<br/>"code": 10004,<br/>"puid": "puid",<br/>"message": "device authentication missing"<br/>}<br/>}                                                                                                                                                                                                                                                                                   |
| `device`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | [components.AuthFinishResponseSubjectDeviceResult](../../models/components/authfinishresponsesubjectdeviceresult.md)                                                                                                                                                                                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | {<br/>"success": {<br/>"uvLevel": 5,<br/>"createdAt": 1666394795,<br/>"claim": {<br/>"deviceId": "eba12f3a-5555-47bc-b85d-21c0cbc4b973"<br/>},<br/>"extras": {<br/>"deviceType": "deviceType",<br/>"trust": {<br/>"reasonCodes": [<br/>1,<br/>1<br/>]<br/>},<br/>"supportedUvLevel": [<br/>6,<br/>6<br/>],<br/>"keyType": "keyType",<br/>"rawSignals": {<br/>"fingerprint": {<br/>"key": "{}"<br/>}<br/>},<br/>"deviceCapabilities": [<br/>"deviceCapabilities",<br/>"deviceCapabilities"<br/>]<br/>}<br/>},<br/>"error": {<br/>"code": 10004,<br/>"message": "device authentication missing"<br/>}<br/>} |
| `mobile`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | [components.AuthFinishResponseSubjectMobileResult](../../models/components/authfinishresponsesubjectmobileresult.md)                                                                                                                                                                                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | {<br/>"success": {<br/>"createdAt": 1666394795,<br/>"authenticatorType": "instant",<br/>"claim": {<br/>"mobileNumber": "12065550100"<br/>},<br/>"extras": {<br/>"payfoneAlias": "37C2666C4VKR...",<br/>"mobileCountryCode": "310",<br/>"phoneMatch": "success",<br/>"ipMatch": "failure",<br/>"mobileOperatorName": "Verizon",<br/>"linkClicked": true<br/>}<br/>},<br/>"error": {<br/>"code": 10004,<br/>"message": "device authentication missing"<br/>}<br/>}                                                                                |
| `user`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | [components.AuthFinishResponseSubjectUserResult](../../models/components/authfinishresponsesubjectuserresult.md)                                                                                                                                                                                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | {<br/>"success": {<br/>"createdAt": 1666394795,<br/>"authenticatorType": "authenticatorType",<br/>"claim": {<br/>"userId": "userId"<br/>},<br/>"extras": {<br/>"trust": {<br/>"subScores": {<br/>"bluetoothScanned": 3.616076749251911,<br/>"inclusion": 4.145608029883936,<br/>"distance": 2.027123023002322,<br/>"wifiScanned": 1.2315135367772556,<br/>"wifiConnected": 7.386281948385884,<br/>"bluetoothConnected": 7.061401241503109,<br/>"bluetoothPaired": 9.301444243932576<br/>},<br/>"reasons": 2,<br/>"fused": 5.637376656633329<br/>}<br/>}<br/>},<br/>"error": {<br/>"code": 10004,<br/>"message": "device authentication missing"<br/>}<br/>} |