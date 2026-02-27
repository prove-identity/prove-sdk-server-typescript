# AuthFinishResponseRawSignals

## Example Usage

```typescript
import { AuthFinishResponseRawSignals } from "@prove-identity/prove-api/models/components";

let value: AuthFinishResponseRawSignals = {
  fingerprint: {
    "key": {},
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `fingerprint`                                                                    | Record<string, [components.Fingerprint](../../models/components/fingerprint.md)> | :heavy_minus_sign:                                                               | Fingerprint includes raw device signals from fingerprint                         |