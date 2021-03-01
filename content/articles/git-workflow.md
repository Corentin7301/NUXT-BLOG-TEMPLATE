---
title: Git workflow
description: Apprenez à utiliser Git
---

# Qu'est ce que GIT ?

Git ? Garage des Iguanes et des Tortues ? Grande Italienne Triste ? Gilles Intègre Tout ?

Non en fait, c'est un **logiciel de gestions de versions décentralisé** développé par Software Freedom Conservancy.
Il s’agit du logiciel de gestion de versions le plus populaire.

## C'est vraiment utile d'apprendre et d'utiliser ça quand on commence en développement ? Quand on est junior ?

**Et bien... oui !!** Parce qu'on l'utilise tout le temps ! Que ce soit pour un projet perso, un projet pro, le projet de Michel, ton pote qui a un bug sur son appli et qui t'appelle à l'aide, ou bien le projet de ta vie que tu montes en équipe avec Raph et Cédric, tes potes devs.

Tu vas même l'utiliser pour régler le bug d'un énorme projet open-source !
Parce que oui, c'est super simple en fait ! (pas le débuguage du projet hein 😉) mais de récupérer, de travailler et de renvoyer le code.

## Un logiciel de gestion de versions ?

En fait on appelle ça du versionnage de code.
Ca consiste à gérer l'ensemble des versions d'un ou plusieurs fichiers.

C'est un outil qui se veut simple et performant, dont la principale tâche est de gérer l'évolution du contenu d'une arborescence.

En gros, il va gérer (pas tout tout seul mais presque 😉) toutes les modifications qui auront lieu sur tes fichiers, et **surtout**, stocker toutes les versions de tes fichiers !

Par exemple, tu développes un site pour Jean, Jean veut un formulaire de contact (nom, prénom, mail) que tu codes. Simple. Sauf qu'un mois après, Jean veut ajouter un champs pour le numéro de téléphone à son formulaire. Tu l'ajoute et tu "commit" (on le verra plus tard mais entends "sauvegarde") et hop ! c'est en ligne. 

Et bien Git va sauvegarder les deux versions du code, celle sans et celle avec le champs "téléphone". Et, puisque c'est sauvegardé, tu pourra voir les modifications et revenir dessus au besoin.

## Tout est sauvegardé sur mon ordinateur ?

Oui ! sous forme de petit dossier cachés .git .

Mais on utilise aussi des services d'hébergement comme GitHub ou GitLab (pour ne citer qu'eux pour l'instant) où l'on va stocker notre code ainsi que les différentes versions.
C'est aussi grâce à cela que tu vas pouvoir bosser sur le projet de Michel, avec Raph et Cédric ou bien le projet open-source (Il faut bien que tout le monde puisse y accéder non ?).

Il faut savoir que quand un fichier n'est pas modifié, le fichier n'est stocké qu'une seule fois. En revanche, comme je l'ai dis, si le fichier est modifié, les deux versions sont stockées.

## Et... ?

Attends, tu as compris ? Si tu as pas tout compris je t'invites à relire tout ça, parce que sinon,... courage 😓😂.

C'est tout bon ?

Bon maintenant je vais te montrer comment installer Git sur ta machine (PC, Mac, Linux, comme tu veux 😉)

## Installons Git

Git c'est un logiciel qu'il va falloir installer et que tu vas utiliser en grande partie dans ton terminal.

Pour le télécharger et l'installer, c'est [ici](https://git-scm.com/downloads) ! (https://git-scm.com/downloads)

Choisis ton système d'exploitation et suis les indications.

Si tu as besoin d'aide, je te renvois sur les installations de Grafikart qui l'explique très bien :

[Pour Windows](https://grafikart.fr/tutoriels/install-git-windows-582#autoplay)

[Pour Mac](https://grafikart.fr/tutoriels/install-git-mac-583#autoplay)

[Pour Linux](https://grafikart.fr/tutoriels/install-git-linux-584#autoplay)

Une fois fait, eh bien je te propose de regarder si Git a été correctement installé en ouvrant un terminal et en tappant :

```bash
git --version
```
![git --version](https://res.cloudinary.com/corentin7301/image/upload/v1613673332/git-workflow-article/git_--version_m6rwpy.png)

Si tu as effectivement un numéro de version qui apparaît, alors **c'est tout bon !!**

On aura accès à la documentation de Git avec la commande :

```bash 
git help
```

<br>
<br>

## On commence ?

### La configuration

Dans un premier temps, on va configurer rapidement Git.

Dans ton terminal tu vas pouvoir "parler" à Git et interragire avec lui.

On va donc configuer Git avec la commande (attends avant de faire 😉):

```bash
git config
```

à laquelle on va donner des options. On va configurer le nom d'utilisateur et ton adresse email (tu peux faire 😉):

```bash
git config --global user.name "Nom Prénom"
git config --global user.email "nom@exemple.com"
```
Le drapeau --global permet d'indiquer à Git que cette configuration est globale et affectera ainsi tous nos futurs projets.

### Premier commit

On va commencer par créer un dossier là où tu veux créer ton projet.

Pourquoi ne pas le faire en ligne de commande ?

Pour commencer on lui donne un chemin (celui que tu veux) :

```bash
cd ton/chemin
```

Ensuite on va créer un nouveau dossier :

```bash
mkdir premier-projet-git
```

Puis on va rentrer dans ce dossier :

```bash
cd ./premier-projet-git
```

et on va **initialier** le projet git dans **ce** dossier :

```bash
git init
```
**ET VOILÀ !! Git est initialisé dans le dossier !**

On va pouvoir créer un fichier 'Readme.md' dans le dossier dans lequel on va donner les informations importantes du projet (Pour l'instant on va s'en tenir au nom): 

```bash
touch Readme.md
```
Et dans ce fichier on va écrire le nom de notre projet :

```md
"# Premier-projet-git"
```
Mais... du coup, on vient de faire une première étape dans notre projet ! On devrait en garder une trace !

On va regarder l'état de notre projet avec la commande :

```bash
git status
```
![git-status](https://res.cloudinary.com/corentin7301/image/upload/v1614094265/git-workflow-article/git_status_pw9lzi.png)

Ca, ça veut dire qu'on a un fichier qui n'a pas été traqué, pas été 'stage'.
En gros il faut lui dire que le fichier 'Readme.md' a été modifié et sera pris en compte pour le prochain commit (la prochaine 'sauvegarde').

On va donc l'ajouter comme ceci :

```bash
git add Readme.md
```
Et pour verifier on refait un :

```bash
git status
```
![git-status](https://res.cloudinary.com/corentin7301/image/upload/v1614094618/git-workflow-article/git_status2_karvmg.png)

C'est plus joli en vert non ? 😉

On vient d'ajouter notre fichier à la file d'attente prête à être 'commit'. Et pourquoi attendre plus longtemps avant de le faire ?

```bash
git commit -m "Mon premier commit"
```

![git-commit](https://res.cloudinary.com/corentin7301/image/upload/v1614095051/git-workflow-article/git-commit_vdglm2.png)

**Bravo !!**

Tu viens de faire ton premier commit !

Pour t'expliquer la commande ```git commit``` permet de faire ton commit, et l'argument ```-m``` permet de noter un message expliquant les modifications des fichiers de ton commit (ça c'est obligatoire si tu ne veux pas te perdre). 

<!-- Pour aller plus vite on peut faire :
```bash
git commit -a -m "Message"
```
```-a``` va 'stage' **tous** les fichiers modifiés juste avant d'effectuer le commit. -->

### Fichier .gitignore

Le fichier .gitignore, même si son nom fait un peu peur, c'est un simple fichier texte dans lequel on va mettre tous les fichiers que l'on ne veut ignorer. Par exemple ça va être des fichiers de configuration, des fichiers thèmes, etc.

Pour le créer on va faire comme notre fichier Readme.md de tout à l'heure :

```bash
touch .gitignore
```
Et dedans on mettre par exemple tous les fichiers .tmp :

![gitignore](https://res.cloudinary.com/corentin7301/image/upload/v1614096050/git-workflow-article/gitignore_s7evnc.png)

En faisant cela, tous les fichiers finissant par .tmp (les fichiers temporaires) seront ignorés par Git.

Pour être plus efficace il existe le site [gitignore.io](https://www.toptal.com/developers/gitignore) dans lequel on va pouvoir mettre toutes les technologies que l'on utilise pour que notre gitignore soit le plus complet possible suivant notre projet.

On va donc commit notre fichier .gitignore :

```bash
git status

git add --all

git commit -m "add .gitignore"
```

### Mais, comment je peux voir mes commit du coup ?

Parce que oui, c'est ça qui est interessant 🤷‍♂️

Et bien avec cette ligne :

```bash
git log
```
On obtient ça :

![git log](https://res.cloudinary.com/corentin7301/image/upload/v1614096749/git-workflow-article/git_log_ff3puu.png)

On a alors plein d'infos ! Ligne par ligne ça donne :

'commit' ➡ l'identifiant du commit

'Author' ➡ L'auteur du commit

'Date' ➡ La date du commit

et le nom qu'on a donné à notre commit.

Lorsqu'on va avoir besoin d'identifier un commit et de l'utiliser on prendra l'identifiant du commit en question.

Pour avoir quelque chose de plus lisible on peut faire :

```bash
git log --oneline
```
Ce qui donne :
![git log oneline](https://res.cloudinary.com/corentin7301/image/upload/v1614097407/git-workflow-article/git_log_oneline_ohu9ir.png)

Avec seulement l'identifiant et le nom du commit.

Une dernière chose là dessus, si je viens à faire une modification sur mon fichier .gitignore par exemple, en modifiant "*.tmp" en "\*.tmpgit" et je le commit, si je veux voir les modifications par rapport à mon dernier commit, je fais :

```bash
git diff
```

![git diff](https://res.cloudinary.com/corentin7301/image/upload/v1614102097/git-workflow-article/git_diff_ilfqdl.png)

On voit alors que depuis le dernier commit, sur le fichier .gitignore, une ligne a été modifiée. "*.tmp" est devenu "\*.tmpgit".

## Je peux revenir en arrière ?

**C'est le gros intérêt du versionning !**

Il y a plusieurs façon de le faire :

### Avec la commande **CHECKOUT**,
on peut passer de branche en branche (on en parlera juste après), revenir sur un commit et revenir sur un fichier par rapport à un commit.

Suite à notre dernière intervention sur le .gitignore, le "*.tmp" est devenu "\*.tmpgit".

Pour nettoyer cela et revenir à "*tmp" on commence par le modifier dans notre fichier :
 ![tmp](https://res.cloudinary.com/corentin7301/image/upload/v1614096050/git-workflow-article/gitignore_s7evnc.png)

et on le commit :

```bash
git add -all

git commit -m "clean gitignore"
```
puis on va regarder quelles ont été les modifications sur .gitignore :

```bash
git log  --oneline -p .gitignore
```

![git log -p](https://res.cloudinary.com/corentin7301/image/upload/v1614103546/git-workflow-article/git_log_-p_hft0h4.png)

On veux aller voir au commit initial du gitignore, soit le commit **"8bc2bdf"**.

Pour voir l'état de ce commit on va faire :

```bash
git checkout 8bc2bdf
```
![git checkout](https://res.cloudinary.com/corentin7301/image/upload/v1614104070/git-workflow-article/git_checkout_zismf4.png)

On est **sur** la "sauvegarde" 8bc2bdf (du nom "add gitignore").

Nous sommes remonté dans le temps sur le commit "add gitignore" et avons donc toute la hiérarchie de fichier du moment précis où l'on a fait ce commit ("add gitignore").

Il faut savoir que si tu veux changer quelque chose tu devra commiter, mais si tu commit et que tu reviens au "présent" avec : ```git checkout master``` le commit ne sera pas pris en compte, il sera enregistré mais pas pris en compte.

Si l'on veut modifier le fichier gitignore pour revenir à celui du commit "add gitignore" (même si ici ça n'a pas d'utilité), on ferait :

```bash
git checkout 8bc2bdf .gitignore
```
puis on ferait un commit.

Ce qu'on a fait, c'est qu'on a recupéré le fichier .gitignore à l'état du commit "add gitignore" et on a dit à git que c'était cette version qu'on va garder. En gros on revient en arrière.

On récupère une ancienne version d'un fichier qu'on remet au goût du jour.

Pour revenir au présent on peut faire :

```bash
git checkout master
```

### Avec la commande **REVERT**,
on peut défaire, inverser un commit.

C'est à dire qu'on va défaire ce qui a été fait au moment du commit en créant un nouveau commit. Ca n'altère donc pas l'historique mais ça ajoute un commit d'inversion.

Par exemple, ajoutons un fichier index.html :

```bash
touch index.html
```

Puis "commitons"-le :

```bash
git add --all

git commit -m "add index.html"
```

Pour défaire ce commit avec "reverse", on va regarder le nom du commit :

```bash
git log --oneline
```

![git log](https://res.cloudinary.com/corentin7301/image/upload/v1614183100/git-workflow-article/git_log_index.html_agrvui.png)

On voit qu'il a l'indentifiant **f385eae**.

Pour le défaire on va faire :

```bash
git revert f385eae
```
ce qui nous ouvre ça :

![git revert](https://res.cloudinary.com/corentin7301/image/upload/v1614183293/git-workflow-article/revert_yr2utl.png)

Il s'agit de Vim, c'est un éditeur de texte. On peut changer le nom du commit, ici "Revert "add index.html"", et pour terminer écris :wq ou sauvegardes le fichier puis fermes-le.

Avec un coup de ```git log``` on peut voir que notre revert a bien fonctionné :

![git log revert](https://res.cloudinary.com/corentin7301/image/upload/v1614183740/git-workflow-article/git_log_revert_r008if.png)

Si on regarde dans la l'arborescence, index.html n'est plus là :

![git log revert](https://res.cloudinary.com/corentin7301/image/upload/v1614183870/git-workflow-article/git_reverse_index_xxixpp.png)

### Avec la commande **RESET**,
on peut également faire plusieurs choses.

Il faudra être prudent lors de son utilisation car, contrairement à **revert** elle altère l'historique = **dangereux** et si tu vois **--hard** = **très dangereux** !

Pour la démo on va créer un fichier indexDeux.html, contact.html, article.html :

```bash
touch indexDeux.html contact.html article.html
```
Dans "indexDeux.html" on va mettre :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accueil</title>
</head>
<body>
    <h1>PAGE ACCEUIL</h1>
    <h2>Git workflow</h2>
</body>
</html>
```

Ca sera notre page d'accueil.

Dans "contact.html" on va mettre :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>contact</title>
</head>
<body>
    <h1>PAGE CONTACT</h1>
</body>
</html>
```

Et dans "contact.html" on va mettre :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>article</title>
</head>
<body>
    <h1>PAGE ARTICLE</h1>
</body>
</html>
```
Avec ```git status``` on voit que nos trois fichiers ne sont pas traqués, on fait donc un coup de ```git add --all``` puis un ```git commit -m "add indexDeux.html contact.html article.html"```.

Donc voici les cas d'utilisation de ```git reset``` avec une démonstration à (presque) chaque fois.

```bash
git reset
```

#### **Supprime un fichier de la zone de staging mais pas les modifications qui sont faites.**

```bash
git reset id-commit
```

Exemple :

Sur "contact.html" on change le html en ajoutant :

```html
    <h2>Voici comment me contacter :</h2>
```
en dessous du ```<h1>``` déjà présent et on **stage**. (On ne commit pas !)

```bash
git add --all
```

Pour supprimer ce fichier de la zone de staging (sans supprimer les modifications) on fait :

```bash
git reset contact.html
```

#### **Supprime tous les fichiers de la zone de staging mais pas les modifications qui sont faites.**

Même fonctionnement que celle d'au dessus mais pour tous les fichiers :

```bash
git reset
```

#### **❗ **A utiliser avec précaution ❗** elle renvoit le dossier de travail au niveau du dernier commit. Toutes les modifications non commit seront perdues.**

```bash
git reset --hard
```

Exemple :

Dans le dernier exemple on a ajouté un "h2" à la page "contact.html", on ne l'a pas commit (tu peux vérifier qu'il n'est pas **stage** avec ```git status```).

Au niveau des commit nous sommes toujours à "add indexDeux.html contact.html article.html" (Tu peux vérifier avec ```git log --oneline```).

On va donc revenir à l'état du commit "add indexDeux.html contact.html article.html" sans garder les modifications (notre h2) :

```bash
git reset --hard
```
Et on peut voir que le "h2" a disparu, que notre zone de staging est propre et que notre dernier commit est toujours "add indexDeux.html contact.html article.html".

#### **Permet de revenir en arrière jusqu'au commit en question, réinitialise la zone de staging tout en laissant votre dossier de travail en l'état. L'historique sera perdu (les commits suivant le commit en question seront perdus, mais pas vos modifications). Cette commande vous permet surtout de nettoyer l'historique en resoumettant un commit unique à la place de plusieurs "petits" commit.**

```bash
git reset id-commit
```

Exemple :

Si on ajoute la ligne :

```html
<h2>Je suis un h2</h2>
```
à indexDeux.html et qu'on commit :

```bash
git add --all
git commit -m "add h2 in indexDeux.html"
```

à contact.html et qu'on commit :

```bash
git add --all
git commit -m "add h2 in contact.html"
```

et à article.html et qu'on commit :

```bash
git add --all
git commit -m "add h2 in article.html"
```
on a donc ça :

![git log h2](https://res.cloudinary.com/corentin7301/image/upload/v1614187705/git-workflow-article/commit_h2_kichbj.png)

ce qui, on ne va pas se mentir, est loin d'être propre.

Alors pourquoi ne pas regrouper tous ces commits en un ?

C'est ce qu'on va faire avec :

```bash
git reset 293b535
```

pour revenir au commit antécédent ("add indexDeux.html contact.html article.html") sans perdre les modifications.

Maintenant, on va voir commit toutes nos modifications sous un seul commit :

```bash
git add --all
git commit -m "add h2 in indexDeux.html contact.html article.html"
```

![git log commit h2](https://res.cloudinary.com/corentin7301/image/upload/v1614188137/git-workflow-article/git_log_commit_h2_fydtgu.png)

C'est plus propre non ? 😉

#### **❗ A utiliser avec beaucoup de précautions ❗ Permet de revenir au commit en question et réinitialise la zone de staging et le dossier de travail pour correspondre. Toutes les modifications, ainsi que tous les commits fait après le commit en question seront supprimés.**

```bash
git reset id-commit --hard
```

## Les branches

Imagines que tu veuilles faire une fonctionnalité sur ton site mais que tu ne veuilles pas modifier ton code initial, celui qui est en ligne. Il te faudrait une sorte de dimmention parallèle... Et bien c'est exactement la définition des branches.

Les branches permettent un historique non linéaire, donc de travailler sur une fonctionnalité particulière sans polluer ton code principal.

Pour cela on fait tout avec la commande :

```bash 
git branch
```

Pour que tout soit clair commençons par 

### Créer une nouvelle branche

Pour faire ça on utilise : 

```bash 
git branch nom-de-la-nouvelle-branche
```

On peut également renommer une branche avec :

```bash
git branch -m nouveau-nom-de-branche
```

dans notre projet on va faire :

```bash 
git branch add-page-story
```

Pour **voir** toutes nos branches on va venir faire :

```bash 
git branch
```

![git branch](https://res.cloudinary.com/corentin7301/image/upload/v1614189993/git-workflow-article/git_branch_fyvnkx.png)

On voit donc que l'on a deux branches, la branche "add-page-story" que l'on vient juste de créer, et une branche "master" (ou "main" selon la version de git) avec un petite * à coté.

La branche "master" (ou "main") est la branche principale du projet, c'est celle que l'on va mettre en production et qui apparaîtra sur le web.

La petite * signifie que c'est la branche sur laquelle nous sommes.

Ici nous sommes donc sur la branche "master", branche principale du projet.

### Changer de branche

Allons donc sur la branche "add-page-story" avec une commande que nous avons déjà vu :

```bash
git checkout add-page-story
```

Je l'ai dis plus haut, la commande ```git checkout``` permet de changer de branche.

Avec un autre :

```bash
git branch
```
![git branch](https://res.cloudinary.com/corentin7301/image/upload/v1614190352/git-workflow-article/git_branch_checkout_e9p5mh.png)

On voit que l'on est sur notre nouvelle branche.

Tout ça c'est bien mais... et ?

Et bien maintenant on peut faire nos modifications sans peur d'abimer notre code qui fonctionne et qui tourne sur le web.

Comme le dit le nom de la branche nous allons ajouter un fichier au projet :

```bash
touch story.html
```

On le stage et on le commit :

```bash
git add --all

git commit -m "add story.html
```

Maintenant revenons sur notre branche principale :

```bash
git checkout master
```

![arborescence master](https://res.cloudinary.com/corentin7301/image/upload/v1614190726/git-workflow-article/arbo_master_pq9hnf.png)

**Aucune trace de "story.html" !**

Il est dans la dimension "add-page-story".


Faisons une modification sur indexDeux.html : on ajoute un "h3" et on commit :

```html
<h3>bonjour</h3>
```
```bash
git add --all

git commit -m "add h3 in index.html"
```

Pour visualiser les branches on peut imaginer un shéma comme cela :

![git kraken1](https://res.cloudinary.com/corentin7301/image/upload/v1614191185/git-workflow-article/git_kraken1_dm9fvg.png)

La branche "add-page-story" contient un commit qui n'existe pas sur "master" et "master" a un commit inexistant sur "add-page-story".

Maintenant que nous avons fait notre nouvelle fonctionnalité (ajouter la page story) et qu'elle fonctionne, il faut les fusionner.


### Fusionner les branches

On va appeler ça **merger**.

Quand on **merge** un branche, on ramene une branche sur une autre et ainsi de la fusionne.

On utilise :

```bash
git merge nom-de-la-branche-à-fusionner-sur-la-branche-courante
```

On doit toujours se mettre sur la branche **sur** laquelle on veut fusionner une autre branche.

Lors d'un merge, la branche source **récupère** l'historique de la branche.

Donc dans notre cas on va se mettre sur la branche "master" :

```bash
git checkout master
```

Puis **merger** :

```bash
git merge add-page-story
```

On vient de rammener "add-page-story" sur "master" :

![gitkraken merge](https://res.cloudinary.com/corentin7301/image/upload/v1614191991/git-workflow-article/git_merge_fydf0h.png)

Et si on regarde nos fichiers on a bien notre pas story.html qui est là et notre h3 dans indeDeux.html.

Magique non ? 🧙🏼‍♂️

Maintenant on a plus besoin de notre branche, on va pouvoir la supprimer.

### Supprimer une branche
Tout simplement avec :

```bash
git branch -d nom-de-la-branche
```

Bien sur si on supprime une branche sans l'avoir mergé, on pert tou ce qu'il y a dessus ! Donc **❗ Attention ❗**

Pour faire cela on doit faire :

```bash
git branch -D nom-de-la-branche
```




<br>
<br>
<br>

************

Ressources :

[Git](https://fr.wikipedia.org/wiki/Git)
<br>
[Gestion de version](https://fr.wikipedia.org/wiki/Gestion_de_versions)
<br>
[GitHub](https://fr.wikipedia.org/wiki/GitHub)
<br>
[Git config](https://git-scm.com/book/fr/v2/Personnalisation-de-Git-Configuration-de-Git)

TODO : 
* faire une cheat sheet
* parler des soft != github
* parler de github desktop
* outils formation git