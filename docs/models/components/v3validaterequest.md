# V3ValidateRequest

## Example Usage

```typescript
import { V3ValidateRequest } from "@prove-identity/prove-api/models/components";

let value: V3ValidateRequest = {
  correlationId: "713189b8-5555-4b08-83ba-75d08780aebd",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            | Example                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `correlationId`                                                                                                                        | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The unique ID that Prove generates for the flow. It is returned from the Start endpoint and cannot be reused outside of a single flow. | 713189b8-5555-4b08-83ba-75d08780aebd                                                                                                   |