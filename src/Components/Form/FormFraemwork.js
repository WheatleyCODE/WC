function createControl(config, validation) {
    return{
        ...config,
        validation,
        valid: !validation, //false
        touched: false,
        value: '',
    }
}
export default createControl