# g-challenge

g-challenge is a NodeJS(express) application provides single Rest API that uses MongoDB.

URL = https://g-challenge.herokuapp.com/v1/record-list

## Installation

[Install](https://nodejs.org/en/) NodeJS


```bash
$ git clone https://github.com/ahmetsahinoglu/g-challenge.git
$ cd g-challenge
$ npm i
```

#####Set your environment variable

```bash
$ export SERVER_PORT=YOUR_PORT_NUMBER
$ export MONGO_URL=YOUR_MONGO_URL
```

#####How to start project in Development Mode

```bash
$ npm run dev
```


#####How to Build for Production

```bash
$ npm run build
```


#####How to run Unit Tests.

```bash
$ npm run test
```

## Usage

```
curl -X POST \
  https://g-challenge.herokuapp.com/v1/record-list \
  -H 'Content-Type: application/json' \
  -d '{ 
  "startDate": "2016-01-26", 
  "endDate": "2018-02-02", 
  "minCount": 100, 
  "maxCount": 102 
}'
```

## Sample Response
```
{
    "record": [
        {
            "key": "tIxjcpM3tdxQdLzi",
            "createdAt": "2017-02-18T14:39:17.909Z",
            "totalCount": 100
        },
        {
            "key": "EPgr9cOCYaLhaY8E",
            "createdAt": "2017-02-19T06:28:18.390Z",
            "totalCount": 100
        },
        {
            "key": "APSy5ZcCkSxvmidc",
            "createdAt": "2017-02-20T05:22:19.806Z",
            "totalCount": 100
        }
    ],
    "code": 0,
    "msg": "success"
}
```
