---
    # MAKE TITLE OF ARTICLE
title: DOCUMENTATION
    # MAKE DESCRIPTION OF ARTICLE
description: DOCUMENTATION of NUXT-BLOG-TEMPLATE by Corentin PERROUX
    # MAKE URL OF ILLUSTRATION IMAGE
urlImage: https://madewithnetwork.ams3.cdn.digitaloceanspaces.com/spatie-space-production/3075/nuxtjs-2.jpg

---

# NUXT BLOG TEMPLATE

## Made by [Corentin PERROUX](https://github.com/Corentin7301)

## DEPLOY ON NETLIFY :

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/Corentin7301/NUXT-BLOG-TEMPLATE"><img src="https://camo.githubusercontent.com/417d890ba67c98ad5856b715343a61cdbf07d72b9bd5b79dd45d43de634c29ea/68747470733a2f2f7777772e6e65746c6966792e636f6d2f696d672f6465706c6f792f627574746f6e2e737667" alt="netlify deploy button"></a>

**Si le repository créé est vide utilisez le bouton "Use this template" de Github.**

If the created repository is empty use the "Use this template" button of Github.

## REPO-NAME: https://github.com/Corentin7301/NUXT-BLOG-TEMPLATE

*********
## Français :


**Installation de node et des dépendances : ```npm i```**

## Personnalisation

Modifiez les données dans le fichier **/blog.config.json** :

* #### **siteUrl** : Nom de domaine du site. Exemple : "https://blog-template.fr"

Il apparaîtra dans la **configuration du feed**, **les metadonnées du site**, **l'url canonique** et la **configuration du sitemap**.

* #### **siteName** : Nom du site. Exemple : "NUXT-BLOG-TEMPLATE"

Il apparaîtra dans les **metadonnées du site et de la page index** et la **balise alt de l'image de la page "contact"**.

* #### **siteTitle** : Sous titre du site. Exemple : "NUXT-BLOG-TEMPLATE"

Il apparaîtra dans le **h2 du header**.

* #### **blogTitle** : Nom de la page blog. Exemple : "BLOG of NUXT-BLOG-TEMPLATE"

Il apparaîtra dans les **metadonnées de la page blog (_page.vue)**.

* #### **contactTitle** : Nom de la page contact. Exemple : "CONTACT of NUXT-BLOG-TEMPLATE"

Il apparaîtra dans les **metadonnées de la page contact**.

* #### **author** : Nom de l'auteur. Exemple : "CORENTIN PERROUX"

Il apparaîtra dans les **metadonnées de la page contact** et dans le **h1 du header**.

* #### **authorEmail** : Email de l'auteur. Exemple : "corentin7301@gmail.com"

Il apparaîtra dans le **feed** et dans le **lien du copyright**.

* #### **copyright** : Copyright. Exemple : "CORENTIN PERROUX"

Il apparaîtra dans le **copyright**.

* #### **siteMetaDescription** : Metadescription du site. Exemple : "NUXT-BLOG-TEMPLATE by Corentin PERROUX"

Il apparaîtra dans les **metadonnées du site** et de **la page index**.


* #### **blogMetaDescription** : Metadescription de la page blog. Exemple : "BLOG of NUXT-BLOG-TEMPLATE by Corentin PERROUX"

Il apparaîtra dans **la page blog (_page.vue)**.


* #### **contactMetaDescription** : Metadescription de la page contact. Exemple : "CONTACT of NUXT-BLOG-TEMPLATE by Corentin PERROUX"

Il apparaîtra dans **la page contact**.

* #### **twitterUrl** : Url du compte Twitter. Exemple : "https://twitter.com/CorentinPerroux"

Il apparaîtra dans la **configuration de la social card de twitter**.


* #### **twitterAccount** : Nom du compte Twitter. Exemple : "@CorentinPerroux"

Il apparaîtra dans la **configuration de la social card de twitter**.

* #### **twitterCardImage** : Image de la card Twitter. Exemple : "https://res.cloudinary.com/corentin7301/image/upload/v1615799454/blog-template/nuxt-blog-template_i25n41.jpg"

Il apparaîtra dans la **configuration de la social card de twitter**.

* #### **mainImage** : Image principale du site. Exemple : "https://res.cloudinary.com/corentin7301/image/upload/v1615799454/blog-template/nuxt-blog-template_i25n41.jpg"

Il apparaîtra dans la **configuration des cards de partage social**, dans **la page contact** et dans **la page index**.

* #### **siteType** : Type de site. Exemple : "website"

**Si vous ne le connaissez pas, laissez "website".**

Il apparaîtra dans la **configuration des cards de partage social**.


* #### **blog.articleCountPerPage** : Nombre d'article sur chaque pages dans l'onglet blog (_page.vue). Exemple : "9"

Il est utilisé dans la **page ArticleList.vue**, **ArticlePagination.vue** et dans **getContent.js**.

* #### **blog.displayNumberOfArticles** : Affichage du nombre d'articles total dans l'onglet blog (_page.vue). true = Afficher | false = NE PAS afficher.

Il est utilisé dans la **page _page.vue**.

* #### **style.colors.primaryColor** : Couleur principale du site. EN HEXADECIMAL Exemple : #41b883.

* #### **style.colors.backgroundColor** : Couleur de fond du site. EN HEXADECIMAL Exemple : #606f7b.

* #### **style.colors.footerBackgroundColor** : Couleur de fond du footer du site. EN HEXADECIMAL Exemple : #41414141.

* #### **style.colors.lightColor** : Couleur claire du site. EN HEXADECIMAL Exemple : #eeeeee.

* #### **style.colors.darkColor** : Couleur sombre du site. EN HEXADECIMAL Exemple : #41414141.


##Contenu :

## Ecrire un article :

* ### Avec les fichiers .md :

  * Ecrire selon la [syntaxe Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

  * Commencer par un frontmatter comprenant :


    * **title**: Nom de l'article. Exemple : NUXT-BLOG-TEMPLATE 1

    * **description**: Description de l'article. Exemple : NUXT-BLOG-TEMPLATE by Corentin PERROUX

    * **urlImage** : Url de l'image d'illustration de l'article. Exemple : https://madewithnetwork.ams3.cdn.digitaloceanspaces.com/spatie-space-production/3075/nuxtjs-2.jpg

  Il est possible d'en avoir l'exemple dans les fichiers Exemple 1 - 12.

  * Supprimez les fichiers Exemple 1 - 12.

* ### Avec Forestry.io :

  * Créer un compte sur le site [Forestry.io](https://forestry.io/).
  * Cliquer sur "Add site".
  * Cliquer sur "Other".
  * Choisir le service d'hébergement du projet.
  * Choisir le repository.
  * Modifier et ajouter des articles dans l'onglet "Articles" du la sidebar.


## Variables d'environnement

Modifier les **variables d'environnement** dans **exemple.env** (**RENOMMER LE FICHIER EN ".env"**) :

* **GOOGLE ANALYTICS** : Variable d'environnement Google Analytics (si Google Ananytics est utilisé).
GOOGLE_ANALYTICS_ID=UA---------

* **CLOUDINARY** : Variable d'environnement Cloudinary pour Nuxtjs (si Cloudinary est utilisé pour la gestion des medias).

CLOUD_NAME=----------

API_KEY=----------

API_SECRET=--------



## Favicon

Remplacer le favicon dans le dossier **/static**.

Modifier le nom du favicon (si besoin) dans le fichier **/nuxt.config.js** à la **ligne 132**.

*********
## Sitemap : 

### Disponible à l'adresse : **/sitemap.xml**

Ajouter les pages statiques (index, contact,...) dans le fichier  **/nuxt.config.js** à la **ligne 216**.

********
## Feed RSS : 

### Disponible à l'adresse : **/feed.xml**

********

## Dayjs : 

Modifier la date du pays dans le fichier  **/nuxt.config.js** aux **lignes 234, 235**.


********

## Nuxt Cloudinary : 

Nuxt Cloudinary permet une gestion des médias optimisés.

Pour utiliser Nuxt Cloudinary :

* Créer un compte sur [https://cloudinary.com/](https://cloudinary.com/)
* Copier le **CLOUD_NAME**, l'**API_KEY** et la **SECRET_KEY** dans le fichier **/.env** .
* Importer des fichiers (images)
* Chaque lien ressemble à ceci : https://res.cloudinary.com/CLOUD-NAME/image/upload/TRANSFORMATIONS/VERSION/PATH-TO-IMAGE
* On peut récupérer le lien ici : ![lien cloudinary](https://res.cloudinary.com/mayashavin/image/upload/f_auto,q_auto/v1603355978/nuxt-cld/copyurl)
* Pour afficher une image peut faire : 
  ```html 
  <cld-image public-id="PATH-TO-IMAGE" width="100%" loading="lazy"
    fetchFormat="auto" quality="auto" alt="" responsive />
  ```

[Nuxt Cloudinary documentation](https://cloudinary.nuxtjs.org/)


## Dépendances installées :

* **nuxt**
* **@nuxt/content**
* **@nuxtjs/dayjs**
* **@nuxtjs/cloudinary**
* **@nuxtjs/feed**
* **@nuxtjs/markdownit**
* **vue-social-sharing/nuxt**
* **@nuxtjs/sitemap**
* **@nuxtjs/google-analytics**
* **@nuxtjs/tailwindcss**


## Scripts :

* **dev**: "nuxt",
* **build**: "nuxt build",
* **start**: "nuxt start",
* **generate**: "nuxt generate",
* **serve**: "nuxt serve",
* **production**: "npm run build && nuxt generate",
* **preview**: "nuxt -p 8080"


## NETLIFY | PRODUCTION

### Netlify configuration

Pour déployer le site via Netlify (si vous n'avez pas utilisé le bouton "Deploy to Netlify") :

* Créer un compte sur le site [https://app.netlify.com/](https://app.netlify.com/).
* Ajouter le site avec le bouton "New site from Git".
* Choisir le service d'hébergement du projet.
* Choisir le repository.
* Dans **Build commande**, entrer "**npm run build && nuxt generate**".
* Appuyer sur le boutton "Deploy site".
* Cliquer sur le bouton "Domain settings".
* Cliquer sur le bouton "Options", "Edit site name" et choisir un nom de domaine. Pour ajouter un nom de domaine personnalisé cliquer sur "Add custom domain".

### Netlify environnement

Si il y a des entrées dans le fichier ".env" du projet, elles devront être recopiées dans Netlify.

* Cliquer sur "Site settings", "Build & deploy" puis "Environment".
* Cliquer sur "Edit variables" puis ajouter toutes les variables d'environnement figurant dans le fichier ".env" du projet.


### Netlify formulaires

Le blog est compatible avec les formulaires NETLIFY.

* Dans Netlify, cliquer sur l'onglet "Forms".
* Dans "Active forms" il y a une entrée "contact". C'est ici que seront stockées toutes les entrées du formulaire de la page "contact".
* Pour être notifié à chaque nouvelle entrée, cliquer sur le bouton "Settings and usage".
* Cliquer sur l'onglet "Form notifications" puis sur "Add notifications".

**A chaque entrée, vous serez notifié par mail, webhook ou Slack.**


***********
## English :
***********
Install node and dependencies : ```npm i```