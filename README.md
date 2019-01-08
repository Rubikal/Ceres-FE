# API Documentation

  * [Health Check](#health-check)
    * [show](#health-check-show)

## Health Check
### <a id=health-check-show></a>show
#### Simple health check for the application
##### Request
* __Method:__ GET
* __Path:__ /status

##### Response
* __Status__: 200
* __Response headers:__
```
content-type: application/json; charset=utf-8
cache-control: max-age=0, private, must-revalidate
```
* __Response body:__
```json
{
  "status": "Healthy!"
}
```

