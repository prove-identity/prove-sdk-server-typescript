# Success

Success is the result of the combination of Verify Result and Possession Result. Possible values are "true", "pending", and "false". The success value will be "pending" until the results of both Verify and Possession are returned or one of them fails, blocking the other.

## Example Usage

```typescript
import { Success } from "@prove-identity/prove-api/models/components";

let value: Success = {};
```

## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |