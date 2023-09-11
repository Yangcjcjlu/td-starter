#!/bin/bash
#Author:yangcj
#Date:2023-09-11
#Description: one step build up


checkDockerContainer(){
    container_name=$1
    if [[ $(docker inspect --format "{{.State.Running}}" $container_name) ]]
       then echo "container $container_name is running, will stop and destory it!"
       docker stop $container_name
       docker rm $container_name
    fi
}

fold_path=./var/project
project_path=td-starter



if ! [[ -d "$fold_path" ]]; 
    then mkdir -p $fold_path 
fi 

cd $fold_path

if ! [[ -d "./$project_path" ]]
      then git clone --branch master --depth=1 https://github.com/Yangcjcjlu/td-starter.git
      cd $project_path
else
      cd $project_path
      git pull origin master
fi


image_name="tx-nginx"
# container_id=$(docker ps -q -f "ancestor=$image_name")
# if [[ -n "container_id" ]];
#  then docker stop $container_id
#  docker rmi 


docker build -t $image_name .

checkDockerContainer $image_name

docker run --name $image_name -d -p 3003:3003 $image_name

echo "tx-starter started, please checked 3003!"
