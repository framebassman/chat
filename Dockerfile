FROM mcr.microsoft.com/dotnet/sdk:6.0.400-1-alpine3.16-amd64 AS build-env

RUN apk add --update 'nodejs>16.17.0-r0' 'npm>8.18.0-r1'

COPY ./Chat.Web /app
WORKDIR /app
#RUN dotnet clean
RUN dotnet restore
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/aspnet:6.0.8-alpine3.16-amd64
WORKDIR /app
COPY --from=build-env /app/out .

ARG SENTRY_RELEASE_BUILDTIME=0.1.0
ENV SENTRY_RELEASE=$SENTRY_RELEASE_BUILDTIME

ENTRYPOINT dotnet Chat.Web.dll
