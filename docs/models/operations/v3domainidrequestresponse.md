# V3DomainIDRequestResponse

## Example Usage

```typescript
import { V3DomainIDRequestResponse } from "@prove-identity/prove-api/models/operations";

let value: V3DomainIDRequestResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `httpMeta`                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)             | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |
| `v3DomainIDResponse`                                                           | [components.V3DomainIDResponse](../../models/components/v3domainidresponse.md) | :heavy_minus_sign:                                                             | N/A                                                                            | {<br/>"name": "My Company",<br/>"pcid": "123456"<br/>}                         |
| `headers`                                                                      | Record<string, *string*[]>                                                     | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |