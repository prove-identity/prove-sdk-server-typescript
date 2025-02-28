# PossessionResult

Possession Result represents the result of the Possession check. Possible values are "pending" and "not_applicable", based on the Possession Type passed in the input. Clients will have to call the Verify Status API to get a result if Possession Result is pending.

## Example Usage

```typescript
import { PossessionResult } from "@prove-identity/prove-api/models/components";

let value: PossessionResult = {};
```

## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |