# Используем официальный JDK 17
FROM eclipse-temurin:17-jdk

# Рабочая директория в контейнере
WORKDIR /app

# Копируем pom.xml и Maven Wrapper
COPY pom.xml mvnw ./
COPY .mvn .mvn

# Делаем mvnw исполняемым
RUN chmod +x mvnw

# Копируем исходники
COPY src src

# Собираем jar внутри контейнера
RUN ./mvnw clean package -DskipTests

# Запускаем jar напрямую из target
ENTRYPOINT ["java","-jar","target/limbiokitchenpro-0.0.1-SNAPSHOT.jar"]
