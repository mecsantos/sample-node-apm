### Prerequisites
There should be a Datadog Agent receiving the traces and logs.

### Build

`docker build -t mecsantos/sample-node-apm .`

### Sample Deployment on Docker

When deploying, specify
DD_ENV=dev
DD_SERVICE=my_express_app
DD_VERSION=1.0.0

`docker run -e DD_ENV=dev -e DD_SERVICE=my_express_app -e DD_VERSION=1.0.0 -p 49160:8080 mecsantos/sample-node-apm`

`curl -i localhost:49160`

### Sample Deployment on Kubernetes

`kubectl apply -f sample-node-app.yaml`