# getir-case-study

This app includes single REST endpoint.


### Example Request Payload

```jsx
{
  "startDate": "2016-01-26",
  "endDate": "2018-02-02",
  "minCount": 2700,
  "maxCount": 3000
}
```
### Example Response Payload
```
{
    "record": [
        {
            "key": "tIxjcpM3tdxQdLzi",
            "createdAt": "2017-02-18T14:39:17.909Z",
            "totalCount": 1000
        },
        {
            "key": "EPgr9cOCYaLhaY8E",
            "createdAt": "2017-02-19T06:28:18.390Z",
            "totalCount": 1000
        },
        {
            "key": "APSy5ZcCkSxvmidc",
            "createdAt": "2017-02-20T05:22:19.806Z",
            "totalCount": 1000
        }
    ],
    "code": 0,
    "msg": "success"
}
```
