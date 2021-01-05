### Prerequisites
This application sets up Datadog APM and trace ID injection on logs. There should be a [Datadog Agent](https://docs.datadoghq.com/tracing/setup_overview/) set to receive traces and logs.

### Build

`docker build -t mecsantos/sample-node-apm .`

### Sample Deployment on Docker

When deploying, specify
DD_ENV=dev
DD_SERVICE=my_express_app
DD_VERSION=1.0.0

`docker run -e DD_ENV=dev -e DD_SERVICE=my_express_app -e DD_VERSION=1.0.0 -p 49160:8080 mecsantos/sample-node-apm`

`curl -i localhost:49160/hello`

### Push Image to Docker Hub

```
docker images
docker tag <IMAGE_ID> mecsantos/sample-node-apm:1.0
docker login
docker push mecsantos/sample-node-apm:1.0
```

### Sample Deployment on Kubernetes

`kubectl apply -f sample-node-app.yaml`

`kubectl apply -f load-balancer.yaml`

Modify Security Groups setting of the Load Balancer.

#### References
[Dockerizing a Node.js web app](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)