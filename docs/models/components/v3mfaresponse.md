# V3MFAResponse

Response body for the V3 MFA API

## Example Usage

```typescript
import { V3MFAResponse } from "@prove-identity/prove-api/models/components";

let value: V3MFAResponse = {
  authToken: "eyJhbGciOi...",
  correlationId: "713189b8-5555-4b08-83ba-75d08780aebd",
  success: "success",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `authToken`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | AuthToken is a one-time use JWT for client side possession SDK<br/>authentication/authorization. | eyJhbGciOi...                                                                                |
| `correlationId`                                                                              | *string*                                                                                     | :heavy_check_mark:                                                                           | Correlation ID is the unique ID that Prove generates for the flow.                           | 713189b8-5555-4b08-83ba-75d08780aebd                                                         |
| `success`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |