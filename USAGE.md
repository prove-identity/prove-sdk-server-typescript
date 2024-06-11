<!-- Start SDK Example Usage [usage] -->
```typescript
import { Proveapi } from "@prove-identity/prove-api";

const proveapi = new Proveapi({
    security: {
        clientID: "<YOUR_CLIENT_ID_HERE>",
    },
});

async function run() {
    const result = await proveapi.v3.v3TokenRequest({
        clientId: "customer_id",
        clientSecret: "secret",
        grantType: "client_credentials",
        password: "password",
        username: "jdoe",
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->