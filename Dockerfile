FROM eclipse-temurin:17-jdk

WORKDIR /app

# Копируем pom.xml, Maven Wrapper и исходники
COPY pom.xml mvnw ./
COPY .mvn .mvn
COPY src src

# Собираем jar внутри контейнера
RUN ./mvnw clean package -DskipTests

# Запускаем jar напрямую из target
ENTRYPOINT ["java","-jar","target/limbiokitchenpro-0.0.1-SNAPSHOT.jar"]
