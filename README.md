# beluuga-ui

## Run for development
- `npm install`
- `npm run serve`

## Build for production
- Using Docker `docker build . -t beluuga-ui:latest`
- Using Docker `docker run -it --rm --name beluuga-ui -p 8081:80 beluuga-ui:latest`

## Environment Variables
- VUE_APP_API_URL  `The URI of the Beluuga-API`
- VUE_APP_GOOGLE_CLIENT_ID `Google Client ID for OAuth2 based authentication`
- VUE_APP_GOOGLE_API_KEY `Google API Key for Maps`
- VUE_APP_FACEBOOK_CLIENT_ID `Client ID for Facebook OAuth2 based authentication`