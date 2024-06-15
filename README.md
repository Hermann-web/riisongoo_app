# Challenge Riisongoo App

## Description

Ce projet est une application qui utilise l'API pour afficher une liste d'articles.

## Instructions pour exécuter le projet

1. Clonez le dépôt :
    ```sh
    git clone https://github.com/your-username/riisongoo_app.git
    ```

2. Accédez au répertoire du projet :
    ```sh
    cd riisongoo_app/frontend
    ```

3. Ouvrez le projet dans votre éditeur de code préféré. Par exemple, avec Visual Studio Code :
    ```sh
    code .
    ```

4. Dans le terminal de votre éditeur de code, accédez au répertoire `frontend` :
    ```sh
    cd frontend
    ```

5. Installez les dépendances :
    ```sh
    npm install
    ```

6. Installez `ngrok` pour le partage de l'application en local :
    ```sh
    npm install ngrok -g
    ```

7. Démarrez l'application :
    ```sh
    npx expo start
    ```

8. Une fois l'application lancée, vous pouvez partager votre application en local en exécutant `ngrok` :
    ```sh
    ngrok http 19006
    ```

   Copiez le lien généré par `ngrok` (par exemple, `http://abcd1234.ngrok.io`) pour partager votre application avec d'autres appareils ou personnes.

## API

L'application utilise l'API fournie pour obtenir la liste des articles. La route utilisée est :
- `GET https://testapi.rii-songoo.pw/api/articles/anon/`
