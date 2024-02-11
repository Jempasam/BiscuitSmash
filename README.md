# Biscuit Smash
Un clone de candy crush.

![Demo](https://jempasam.github.io/BiscuitSmash/)
# Alignement
Le joueur peut déplacer un cookie à condition que cela crée un alignement correcte.

# Destruction
Après avoir créé un alignement, les cookies sont détruite, et les cookies du dessus tombent pour combler le vide.
Il y a une animation de chute fait avec css.
Si la chute crée un nouvel alignement alors tout se répète.

# Réaction en chaine et score
Le joueur gagne d'abord 5 points par cookie détruit.
Puis si une chute de cookie entraine de nouvelles destructions de cookie, le joueur gagne alors le double.
Cela peut se répéter plusieurs fois à la suite, le joueur gagne donc 5 par cookie, puis 10 par cookie, puis 20 par cookie etc...
Le multiplicateur actuelle et le score totale qui va être ajouté à la fin de la réaction en chaine est affiché.

# Bombe et mines
Parmis les cookies il y a des bombes et des mines qui peuvent être aligné de la même manière mais lorsqu'ils le sont
ils détruisent d'autres cookies aux alentours, ces cookies détruit ne rapportent pas de points mais cela peut aider à créé un nouvel alignement.

# Son
Il y a des bruitages de destruction de cookie.
