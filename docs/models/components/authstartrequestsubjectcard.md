# AuthStartRequestSubjectCard

## Example Usage

```typescript
import { AuthStartRequestSubjectCard } from "@prove-identity/prove-api/models/components";

let value: AuthStartRequestSubjectCard = {
  authenticators: {
    airKey: {
      claim: {
        puids: [
          "puids",
          "puids",
        ],
      },
      testMode: "testMode",
    },
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `authenticators`                                                                                                             | [components.AuthStartRequestSubjectCardAuthenticators](../../models/components/authstartrequestsubjectcardauthenticators.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          | {<br/>"airKey": {<br/>"testMode": "testMode",<br/>"claim": {<br/>"puids": [<br/>"puids",<br/>"puids"<br/>]<br/>}<br/>}<br/>} |