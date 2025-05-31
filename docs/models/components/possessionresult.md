# PossessionResult

The result of the possession check. Possible values are `pending` and `not_applicable`, based on the `possessionType` passed in the input. Clients will have to call the Verify Status API to get a result if `possessionResult=pending`.

## Example Usage

```typescript
import { PossessionResult } from "@prove-identity/prove-api/models/components";

let value: PossessionResult = {};
```

## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |