FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /source

# copy stuff
COPY . .
RUN dotnet restore

# build
RUN dotnet publish -c release -o /app --no-restore

# final stage/image
FROM mcr.microsoft.com/dotnet/aspnet:5.0
WORKDIR /app
COPY --from=build /app ./
ENTRYPOINT [ "dotnet", "demo-api.dll" ]