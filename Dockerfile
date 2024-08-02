FROM mysql:5.7
RUN mkdir -p /mysql
WORKDIR /mysql
CMD [ "--innodb-use-native-aio=0" ]