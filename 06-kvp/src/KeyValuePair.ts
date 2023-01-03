class KeyValuePair<KeyT, ValueT> {
    private key! : KeyT;
    private value! : ValueT;

    public setKeyValue(key : KeyT, value : ValueT) {
        this.key = key;
        this.value = value
    }
    
    public display() {
        console.log(`${this.key} - ${this.value}`);
    }
}

export {
    KeyValuePair
}