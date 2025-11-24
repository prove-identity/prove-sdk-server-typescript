# VerificationType

The verification method based on the use case and authorization level. Current allowed values: "verifiedUser", "accountOpening", "bot", "prefill", "prefillForBiz", "identityResolution".

## Example Usage

```typescript
import { VerificationType } from "@prove-identity/prove-api/models/components";

let value: VerificationType = VerificationType.VerifiedUser;
```

## Values

| Name                 | Value                |
| -------------------- | -------------------- |
| `Bot`                | bot                  |
| `VerifiedUser`       | verifiedUser         |
| `AccountOpening`     | accountOpening       |
| `Prefill`            | prefill              |
| `PrefillForBiz`      | prefillForBiz        |
| `IdentityResolution` | identityResolution   |