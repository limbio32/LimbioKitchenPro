# Используем официальный JDK 17
FROM eclipse-temurin:17-jdk

# Рабочая директория
WORKDIR /app

# IPv4 вместо IPv6 для Java (Neon может быть лучше через IPv4)
ENV JAVA_TOOL_OPTIONS="-Djava.net.preferIPv4Stack=true"

# Копируем Maven Wrapper и pom.xml
COPY pom.xml mvnw ./
COPY .mvn .mvn

# Делаем mvnw исполняемым
RUN chmod +x mvnw

# Копируем исходники
COPY src src

# Собираем jar внутри контейнера
RUN ./mvnw clean package -DskipTests

# Запуск Spring Boot приложения
ENTRYPOINT ["java", "-jar", "target/limbiokitchenpro-0.0.1-SNAPSHOT.jar"]
