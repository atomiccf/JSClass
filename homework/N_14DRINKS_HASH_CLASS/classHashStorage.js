class HashStorage {
    constructor() {
        this.storage = {} ;
    }
    addValue(key,value) {
        this.storage[key] = value;
    }

    getValue(key){

        return (key in this.storage)? this.storage[key] : undefined;
    }

    deleteValue(key){

        return (key in this.storage) ? delete this.storage[key]: false;

    }

    getKeys(){

        return Object.keys(this.storage);

    }


}