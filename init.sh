sed -e "s|URL_API_SED|$URL_API\/|g" -e "s|URL_KEYCLOAK_SED|$URL_KEYCLOAK_AUTH\/|g" -e "s|CLIENT_ID_SED|$KEYCLOAK_CLIENT_ID\/|g" -e "s|REALM_SED|$KEYCLOAK_REALM\/|g" ./usr/share/nginx/html/main-es5.js && sed -e "s|URL_API_SED|$URL_API\/|g" -e "s|URL_KEYCLOAK_SED|$URL_KEYCLOAK_AUTH\/|g" -e "s|CLIENT_ID_SED|$KEYCLOAK_CLIENT_ID\/|g" -e "s|REALM_SED|$KEYCLOAK_REALM\/|g" ./usr/share/nginx/html/main-es2015.js