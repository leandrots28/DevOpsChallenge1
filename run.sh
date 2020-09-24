docker build -t myrepo/mysqldb:v1.0.0 ./db/
kubectl create deployment mysqldb --image=myrepo/mysqldb:v1.0.0 
docker build -t myrepo/myapi:v1.0.0 ./app/
kubectl create deployment myapi --image=myrepo/myapi:v1.0.0
kubectl expose deployment myapi --port=8088 --target-port=8088
kubectl create service nodeport my-ns --tcp=8088:8088