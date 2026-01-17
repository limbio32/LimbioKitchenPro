FROM eclipse-temurin:17-jdk

WORKDIR /app

# Копируем pom.xml и исходники
COPY pom.xml mvnw ./
COPY .mvn .mvn
COPY src src

# Собираем jar внутри контейнера
RUN ./mvnw clean package

# Копируем скомпилированный jar
COPY target/limbiokitchenpro-0.0.1-SNAPSHOT.jar app.jar

# IPv4
ENV JAVA_TOOL_OPTIONS="-Djava.net.preferIPv4Stack=true"

ENTRYPOINT ["java","-jar","app.jar"]