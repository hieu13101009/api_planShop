# api_planShop
# 
# vagrant up
# vagrant ssh
# install docker by hand, docker document,
# install docker compose by hand,
# 
# sudo systemctl start docker
# first time run "docker-compose up -d" need permission. ( issue same like: "add docker group", or smt like that)
# sudo usermod -aG docker $USER
# Note:  after add group, exit form machin and vagrant ssh again. (yes! it's go out side off vitual machin and come again by)
# 
# check mongodb
# //go to mongodb database shell
# docker exec -it mongodb bash
# show dbs
# mongodb here is container_name: mongodb, u can docker container ps for use container id like this: 2d3e9dbd76af
# show dbs //more detail: https://docs.mongodb.com/manual/reference/mongo-shell/
# 
# docker run -it --rm node /bin/bash -c 'node --version'
