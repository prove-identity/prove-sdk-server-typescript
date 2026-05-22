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
| `card`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | [components.AuthFinishResponseSubjectCardsResult](../../models/components/authfinishresponsesubjectcardsresult.md)                                                                                                                                                                                                                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | {<br/>"error": {<br/>"code": 10004,<br/>"message": "device authentication missing",<br/>"puid": "puid"<br/>},<br/>"success": {<br/>"authenticatorType": "authenticatorType",<br/>"claim": {<br/>"puid": "puid"<br/>},<br/>"createdAt": 1666394795<br/>}<br/>}                                                                                                                                                                                                                                                                                   |
| `device`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | [components.AuthFinishResponseSubjectDeviceResult](../../models/components/authfinishresponsesubjectdeviceresult.md)                                                                                                                                                                                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | {<br/>"error": {<br/>"code": 10004,<br/>"message": "device authentication missing"<br/>},<br/>"success": {<br/>"claim": {<br/>"deviceId": "eba12f3a-5555-47bc-b85d-21c0cbc4b973"<br/>},<br/>"createdAt": 1666394795,<br/>"extras": {<br/>"deviceCapabilities": [<br/>"deviceCapabilities",<br/>"deviceCapabilities"<br/>],<br/>"deviceType": "deviceType",<br/>"keyType": "keyType",<br/>"rawSignals": {<br/>"fingerprint": {<br/>"key": "{}"<br/>}<br/>},<br/>"supportedUvLevel": [<br/>6,<br/>6<br/>],<br/>"trust": {<br/>"reasonCodes": [<br/>1,<br/>1<br/>]<br/>}<br/>},<br/>"uvLevel": 5<br/>}<br/>} |
| `mobile`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | [components.AuthFinishResponseSubjectMobileResult](../../models/components/authfinishresponsesubjectmobileresult.md)                                                                                                                                                                                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | {<br/>"error": {<br/>"code": 10004,<br/>"message": "device authentication missing"<br/>},<br/>"success": {<br/>"authenticatorType": "instant",<br/>"claim": {<br/>"mobileNumber": "12065550100"<br/>},<br/>"createdAt": 1666394795,<br/>"extras": {<br/>"ipMatch": "failure",<br/>"linkClicked": true,<br/>"mobileCountryCode": "310",<br/>"mobileOperatorName": "Verizon",<br/>"payfoneAlias": "37C2666C4VKR...",<br/>"phoneMatch": "success"<br/>}<br/>}<br/>}                                                                                |
| `user`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | [components.AuthFinishResponseSubjectUserResult](../../models/components/authfinishresponsesubjectuserresult.md)                                                                                                                                                                                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | {<br/>"error": {<br/>"code": 10004,<br/>"message": "device authentication missing"<br/>},<br/>"success": {<br/>"authenticatorType": "authenticatorType",<br/>"claim": {<br/>"userId": "userId"<br/>},<br/>"createdAt": 1666394795,<br/>"extras": {<br/>"trust": {<br/>"fused": 5.637376656633329,<br/>"reasons": 2,<br/>"subScores": {<br/>"bluetoothConnected": 7.061401241503109,<br/>"bluetoothPaired": 9.301444243932576,<br/>"bluetoothScanned": 3.616076749251911,<br/>"distance": 2.027123023002322,<br/>"inclusion": 4.145608029883936,<br/>"wifiConnected": 7.386281948385884,<br/>"wifiScanned": 1.2315135367772556<br/>}<br/>}<br/>}<br/>}<br/>} |