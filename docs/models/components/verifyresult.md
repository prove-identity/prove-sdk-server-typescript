# VerifyResult

Verify Result represents the result of the Verify process. Possible values are "success", "pending", and "failed". If the Verify result is pending, clients will need to call the Verify Status API to get a result.

## Example Usage

```typescript
import { VerifyResult } from "@prove-identity/prove-api/models/components";

let value: VerifyResult = {};
```

## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |