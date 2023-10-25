## Comandos de Docker
### CREATE VIRTUAL NETWORK
```bash
docker network create <networkName>
```

### BUILD APP
En la carpeta que contiene _Dockerfile_:
```bash
docker build -t <appName> .
```

### CREATE AN INDIVIDUAL CONTAINER AND RUN IT
```bash
docker run -p <PCPort>:<containerPort> --network=<networkName> --name=<appName> <appName>
```

### RUN THE CREATED INDIVIDUAL CONTAINER
```bash
docker start <appName>
```
Si se agrega "-a" se mostrará en consola el output de la app.