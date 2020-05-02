## To start dev environment
* `sudo docker-compose up` --- this will start the 2 containers web and tests, with live reload

## For tests terminal interaction
* `sudo docker ps` -- get the id of web container, then
* `sudo docker exec -it containerName/Id sh` --- will start the terminal in web container, then
* `yarn run test` --- will run the tests as norman terminal does 

## For new dependencies instalation:
* `yarn add somthng` run this in root directory w/o container, this will update the package.json and then restart containers by `sudo ocker-compose up`
