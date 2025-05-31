# V3VerifyStatusResponseSuccess

The result of the combination of Verify Result and Possession Result. Possible values are `true`, `pending`, and `false`. The success value will be `pending` until the results of both Verify and Possession are returned or one of them fails, blocking the other.

## Example Usage

```typescript
import { V3VerifyStatusResponseSuccess } from "@prove-identity/prove-api/models/components";

let value: V3VerifyStatusResponseSuccess = {};
```

## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |