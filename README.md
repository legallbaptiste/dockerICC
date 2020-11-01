# TP Docker EISTI ICC 2020

Vous trouverez ici le projet EISTI Docker 2020.
Ce projet a pour but de deployer un server NodeJS avec Postgresql comme DB.
Vous trouverez une partie developement et production en fonction de ce que vous mettez dans le fichier .env (developement par defaut)

Pour lancer le projet il faut lancer la commande : 

docker-compose up --build

Vous pouvez ajouter -d pour pouvoir détacher le container et pour qu'il puisse tourner en arrière plan

Une fois la commande faites, vous pouvez ouvrir un navigateur et aller sur l'adresse http://localhost:3000 pour pouvoir accèder au resultat.


Il y a 2 docker-compose, le override est toujours appelé en premier par rapport à l'autre qui est celui de defaut.

Le Dockerfile permet de récupérer l'image nodeJS et le docker-compose.yml relie le Dockerfile et la BDD postgresql 


Si vous avez un problème de ce style au démarrage :

ERROR: could not find an available, non-overlapping IPv4 address pool among the defaults to assign to the network

il suffit d'eteindre le VPN : sudo service openvpn stop 

