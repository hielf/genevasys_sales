# REST API

***

## send SMS verify_code

***

## How to request 
* Method: POST
* Need:

```
root_url/api/users/send_verify
```
* params: mobile, sign
* sign process: md5(last 4 digt of mobile).downcase
* output: {
    "status": 0,
    "message": "success"
}
