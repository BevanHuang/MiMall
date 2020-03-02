/**
 * Storage 封装
 * */ 

const STORAGE_KEY = 'mall';
export default {
    // 存储值
    setItem(key, value, module_name) {
        if(module_name) {
            let val = this.getItem(module_name);
            if(!val) return;
            val[key] = value;
            this.setItem(module_name, val);
        } else {
            let val = this.getStorage();
            if(!val[key]) return;
            val[key] = value;
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
        }
    },
    // 获取某一个模块下面的属性user下面的userName
    getItem(key, module_name) {
        if(module_name) {
            let val = this.getItem(module_name);
            if(val) return val[key];
        }
        let sto = this.getStorage();
        return sto[key];
    },
    // 获取Storage
    getStorage() {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
    },
    // 删除属性
    clear(key, module_name) {
        let val = this.getStorage();
        if(module_name) {
            if(!val[module_name]) return;
            delete val[module_name][key];
        } else {
            delete val[key];
        }
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    }
}