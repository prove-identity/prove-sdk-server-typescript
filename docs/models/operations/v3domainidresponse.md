# V3DomainIDResponse

## Example Usage

```typescript
import { V3DomainIDResponse } from "@prove-identity/prove-api/models/operations";

let value: V3DomainIDResponse = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `httpMeta`                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)             | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |
| `v3DomainIDResponse`                                                           | [components.V3DomainIDResponse](../../models/components/v3domainidresponse.md) | :heavy_minus_sign:                                                             | V3DomainIDResponse                                                             | {<br/>"name": "My Company",<br/>"pcid": 123456123456<br/>}                     |