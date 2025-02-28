docker build --platform linux/amd64 -t mert/client:v0.0.1 .

aws ecr get-login-password --profile personal --region us-east-1 | docker login --username AWS --password-stdin 471112521203.dkr.ecr.us-east-1.amazonaws.com

docker tag mert/client:v0.0.1 471112521203.dkr.ecr.us-east-1.amazonaws.com/mert/client:v0.0.1

docker push 471112521203.dkr.ecr.us-east-1.amazonaws.com/mert/client:v0.0.1