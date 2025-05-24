# V3ChallengeRequest

## Example Usage

```typescript
import { V3ChallengeRequest } from "@prove-identity/prove-api/models/components";

let value: V3ChallengeRequest = {
  correlationId: "713189b8-5555-4b08-83ba-75d08780aebd",
  dob: "1981-01",
  ssn: "0596",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            | Example                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `correlationId`                                                                                                                        | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The unique ID that Prove generates for the flow. It is returned from the Start endpoint and cannot be reused outside of a single flow. | 713189b8-5555-4b08-83ba-75d08780aebd                                                                                                   |
| `dob`                                                                                                                                  | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | The date of birth in one of these formats: YYYY-MM-DD, YYYY-MM, or MM-DD. Acceptable characters are: numeric with symbol '-'.          | 1981-01                                                                                                                                |
| `ssn`                                                                                                                                  | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | The full or last 4 numbers of the social security number. Acceptable characters are: numeric.                                          | 0596                                                                                                                                   |