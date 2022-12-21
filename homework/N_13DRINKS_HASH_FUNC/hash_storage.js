function HashStorageFunc (){

    this.storage = {}

    this.addValue = function (key,value){

        this.storage[key] = value ;

    }

    this.getValue = function(key) {

        return (key in this.storage)? this.storage[key] : undefined;

    }

    this.deleteValue = function(key){

        return (key in this.storage) ? delete this.storage[key]: false;

    }

    this.getKeys = function() {

        return Object.keys(this.storage);

    }
}