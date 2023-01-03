class KeyValuePair {
    setKeyValue(key, value) {
        this.key = key;
        this.value = value;
    }
    display() {
        console.log(`${this.key} - ${this.value}`);
    }
}
export { KeyValuePair };
