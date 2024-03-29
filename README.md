# Questions de TP Développement Web

1. Le fichier `package-lock.json` généré par la commande `npm install` permet de figer les versions des dépendances du projet. Cela permet une fiabilité et une reproductibilité du projet à travers ses différentes installations.

2. Le format composé de 3 chiffres qui est utilisé par convention par les dépendances NPM s'appelle le **Semantic Versioning**.

3. Une `devDependency` est un package de dépendances de projets Node.js qui est uniquement utilisé pendant le processus de développement. Ces dépendances ne sont donc pas nécessaires pour la version de production de l'application. La différence qui sépare la `devDependency` de la dépendance est que les `devDependency` ne sont pas installées lorsque le projet est importé comme un package dans un autre projet (avec `npm install "$package"`), tandis que les dépendances normales le sont. Il est cependant possible de préciser si les `devDependency` doivent être installées dans la commande `npm install` avec le tag `--dev`, ou non avec le tag `--production`.

4. Une *closure* ou *IIFE* (Immediately Invoked Function Expression) est un modèle JavaScript où une fonction est définie et exécutée immédiatement. Elle sert à créer des variables privées et à encapsuler le code. Elle a été remplacée avec l'ES6 par une manière plus structurée de gérer le scope et les dépendances, notamment avec les *named imports*.

5. La ligne de code `import * from './utils'` (qui est un *namespace import*) importe tout ce qui peut être exporté dans le module `./utils`, tandis que `import { parseUrl } from './utils'`  (qui est un *named import*) importe uniquement la fonction `parseUrl` du module `./utils`. Il est mieux d'utiliser le *named import* car cela permet un import plus contrôlé des variables et fonctions dans le code, tandis que le *namespace import* est plus susceptible de créer des conflits de noms ou de faire des imports inutiles.

6. Les classes ES6 ne peuvent pas, à l'inverse des classes Java, avoir d'interfaces ou utiliser l'*overloading* de méthodes ou de constructeurs.

7. `var` permet de définir une variable sur le scope global ou le scope de fonction où il a été défini. `let` est défini dans les *module scope* ou *block scope*. Il est préférable d'utiliser `let`, puisque `var` cause par son fonctionnement une pollution du scope global.

8. `.bind(this)` est utilisé pour transmettre la variable `this` à une fonction anonyme. Si on venait à le supprimer, la fonction ne serait pas consciente de la variable `this` que nous souhaitons qu'elle utilise. Elle utiliserait plutôt la valeur de `this` du scope environnant, ce qui peut causer des erreurs ou un comportement imprévisible de la fonction. Il n'est pas nécessaire d'utiliser le `.bind(this)` pour les *arrow functions* puisque celles-ci sont capables de directement récupérer le `this` de leur contexte lexical environnant.

9. Le `@` indique l'utilisation d'un décorateur; dans `@babel/***`, il est indiqué que le package est apparenté à Babel est à ses plugins.

10. Les avantages des *Promises* sont : le contrôle d'actions asynchrones, une gestion structurée des erreurs, et la possibilité d'enchaîner des méthodes à la suite.

11. Les fonctionnalités *async/await* ont été ajoutées dans la version d'ECMAScript 2017, ES8.

12. La programmation orientée-objet pour le web est considérée comme plus facile à maintenir car elle permet la modularisation, l'encapsulation, et la réutilisation de code, pour une plus grande facilité de débogage, des tests et des mises à jour.

13. La programmation fonctionnelle est une manière d'écrire certaines opérations de programmation en chaînant des fonctions les unes après les autres (comme `filter`, `map` ou `reduce`) pour traiter des données de manière concise et efficace.

14. La fonction `map()` applique à chaque élément d'une collection une fonction donnée, et retourne la collection ainsi modifiée.

15. La fonction `filter()` applique un test (défini par une fonction donnée) à chaque élément d'une collection, et renvoie la collection contenant les éléments qui ont passé le test avec succès.

16. La fonction `reduce()` applique une fonction donnée avec un accumulateur sur une collection d'éléments, afin de réduire la collection à un unique élément qui est retourné.

17. D'une part, `.then()` utilise les promesses et l'enchaînement de plusieurs `.then()` pour gérer plusieurs opérations asynchrones à la suite. Les `.then()` ne sont pas bloquants dans l'exécution du code. D'autre part, `async/await` permet d'écrire du code asynchrone en utilisant aussi les promesses, mais avec une syntaxe ressemblant plutôt à du code synchrone. `await` est quant à lui bloquant dans l'exécution du code.

18. Le préfixe `_` dans un fichier sass indique que le fichier est partiel, et qu'il doit être importé dans un autre fichier sass plutôt que d'être compilé tout seul.
