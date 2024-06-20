<!-- Start SDK Example Usage [usage] -->
```typescript
import { Proveapi } from "@prove-identity/prove-api";

const proveapi = new Proveapi({
    security: {
        clientID: "<YOUR_CLIENT_ID_HERE>",
        clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
    },
});

async function run() {
    const result = await proveapi.v3.v3StartRequest({
        deviceId: "713189b8-5555-4b08-83ba-75d08780aebd",
        dob: "2024-05-02T00:00:00Z",
        emailAddress: "jdoe@example.com",
        finalTargetUrl: "https://www.example.com/landing-page",
        flowId: "prove-standard-prefill-i1",
        flowType: "mobile",
        ipAddress: "10.0.0.1",
        last4SSN: "1234",
        phoneNumber: "12065550100",
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->