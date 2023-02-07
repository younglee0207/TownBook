# 가동중인 awsstudy 도커 중단 및 삭제
sudo docker ps -a -q --filter "name=townbook" | grep -q . && docker stop townbook && docker rm townbook | true

# 기존 이미지 삭제
sudo docker rmi smhyun128/townbook:1.0

# 도커허브 이미지 pull
sudo docker pull smhyun128/townbook:1.0

# 도커 run
docker run -d -p 8081:8081 --name townbook smhyun128/townbook:1.0

# 사용하지 않는 불필요한 이미지 삭제 -> 현재 컨테이너가 물고 있는 이미지는 삭제되지 않습니다.
docker rmi -f $(docker images -f "dangling=true" -q) || true