# Используем OpenJDK 17
FROM eclipse-temurin:17-jdk

WORKDIR /app

COPY target/limbiokitchenpro-0.0.1-SNAPSHOT.jar app.jar

# Заставляем Java использовать IPv4
ENV JAVA_TOOL_OPTIONS="-Djava.net.preferIPv4Stack=true"

ENTRYPOINT ["java","-jar","app.jar"]