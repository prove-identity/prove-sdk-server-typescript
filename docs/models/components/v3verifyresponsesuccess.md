# V3VerifyResponseSuccess

The result of the combination of `verifyResult` and `possessionResult`. Possible values are `true`, `pending`, and `false`. The value will be `pending` until the results of both Verify and Possession are returned or one of them fails, blocking the other.

## Example Usage

```typescript
import { V3VerifyResponseSuccess } from "@prove-identity/prove-api/models/components";

let value: V3VerifyResponseSuccess = {};
```

## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |