const Singleton = (function () {
    let instance;

    function createInstance() {
        return {
            configurations: {},
            
            addConfig(key, value) {
                if(key in this.configurations) {
                    alert(`Key "${key}" already exists. Value updated to "${value}".`);
                } else {
                    alert(`Configuration added: ${key} = ${value}`);
                }
                this.configurations[key] = value;
            },

            viewConfigs() {
                return this.configurations;
            },

            resetConfigs() {
                this.configurations = {};
                alert("All configurations have been reset.");
            }
        }
    }

    return { 
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }    
    }

})();