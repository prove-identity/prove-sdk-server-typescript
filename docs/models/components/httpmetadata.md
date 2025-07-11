# HTTPMetadata

## Example Usage

```typescript
import { HTTPMetadata } from "@prove-identity/prove-api/models/components";

let value: HTTPMetadata = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `response`                                                            | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `request`                                                             | *Request*                                                             | :heavy_check_mark:                                                    | Raw HTTP request; suitable for debugging                              |