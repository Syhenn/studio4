# Utilisez une image de node.js comme base
FROM node:alpine

# Définit le répertoire de travail à l'intérieur du conteneur
WORKDIR /app

# Copie les fichiers package.json et package-lock.json (ou yarn.lock si vous utilisez Yarn)
COPY package.json .
COPY package-lock.json .

# Installe les dépendances
RUN npm install

# Copie le reste des fichiers de l'application
COPY . .

# Compile l'application React
RUN npm run build

# Démarre l'application (vous pouvez remplacer 'npm start' par la commande que vous utilisez pour démarrer votre application)
CMD ["npm", "start"]
