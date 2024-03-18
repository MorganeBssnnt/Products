// Importation du package readline-sync 
import readlineSync from 'readline-sync';

// Tableau contenant les produits
let products = [];

// Ajouter un produit
function addProduct() {
    const name = readlineSync.question('Nom du produit : ');
    const price = parseInt(readlineSync.question('Prix : '));
    const quantity = parseInt(readlineSync.question('Quantite: '));
    // Rassembler les informations dans un seul objet
    const product = { name, price, quantity };
    // Ajouter le produit au tableau
    products.push(product);
}

// Retirer un produit
function removeProduct() {
    const name = readlineSync.question('Nom du produit a retirer : ');
    // Retrouver le produit dans l'index avec son nom
    const index = products.findIndex(product => product.name === name);
    if (index !== -1) {
        // Retirer le produit du tableau
        products.splice(index, 1);
    } else {
        alert('Produit inexistant');
    }
}

// Modifier la quantité ou le prix d'un produit existant
function updateProduct() {
    const name = readlineSync.question('Nom du produit a modifier : ');
    // Retrouver le produit dans l'index avec son nom
    const index = products.findIndex(product => product.name === name);
    if (index !== -1) {
        // Nouveaux : quantité et prix
        const price = parseInt(readlineSync.question('Nouveau prix: '));
        const quantity = parseInt(readlineSync.question('Nouvelle quantite: '));
        // Mettre a jour la nouvelle quantité et prix
        products[index].price = price;
        products[index].quantity = quantity;
    } else {
        alert('Produit inexistant');
    }
}

// Afficher la liste des produits
function displayProducts() {
    console.log('Produits :');
    products.forEach(product => {
        console.log(`Nom : ${product.name}, Prix : ${product.price}, Quantite : ${product.quantity}`);
    });
}

// Options concernant les produits
function options() {
    while (true) {
        console.log('Menu:');
        console.log('1. Ajouter un produit');
        console.log('2. Retirer un produit');
        console.log('3. Modifier un produit');
        console.log('4. Afficher les produits');
        // Options disponibles
        const choice = parseInt(readlineSync.question('Choisir une option : '));
        switch (choice) {
            case 1: addProduct();
                break;
            case 2: removeProduct();
                break;
            case 3: updateProduct();
                break;
            case 4: displayProducts();
                break;
        }
    }
}

// Afficher les options
options();
