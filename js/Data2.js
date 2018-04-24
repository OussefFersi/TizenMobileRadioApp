var DataT = {
    noms: [],
    prenoms: [],
    adresses: [],
    images: []
};
DataT.setNoms = function(list) {
    this.noms = list;
};
DataT.setImages = function(list) {
    this.images = list;
};
DataT.setPrenoms = function(list) {
    this.prenoms = list;
};
DataT.setAdresses = function(list) {
    this.adresses = list;
};
DataT.getNom = function(index) {
    var nom = this.noms[index];
    if (nom) { 
        return nom;
    } else {
        return null;
    }
};
DataT.getPrenom = function(index) {
    var prenom = this.prenoms[index];
    if (prenom) { 
        return prenom;
    } else {
        return null;
    }
};
DataT.getAdresse = function(index) {
    var adresse = this.adresses[index];
    if (adresse) { 
        return adresse;
    } else {
        return null;
    }
};
DataT.getNomCount = function() {
    return this.noms.length;
};
DataT.getNoms = function() {
    return this.noms;
};

DataT.getImages = function(index) {
    var image = this.images[index];
    if (image) { 
        return image;
    } else {
        return null;
    }
};
