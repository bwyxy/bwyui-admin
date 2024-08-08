/**
 * 字符串尺寸转化
 * @param {String | Number} sizeStr 尺寸
 * @param {String} unit 单位
 * @returns 
 */
export const parseSizeString = (sizeStr , unit) => {
    if(typeof sizeStr == 'string') {
        const match = sizeStr.match(/^(-?\d+(\.\d+)?)(\w+)?$/);  
        if (!match) {  
          throw new Error('无效的尺寸字符串');  
        }  
         
        const number = parseFloat(match[1]);  
        const strUnit = match[2] || 'px';
        
        return number + strUnit 
    }else {
        return sizeStr + unit
    }
}

/**
 * 内联样式转化
 * @param {Object | String} str
 */
export const parseStyle = (str) => {
    if(typeof str == 'string') {
        const styleObj = {};  
        const properties = str.split(';');  
        properties.forEach(property => {  
            if (property.trim() !== '') {  
            const [key, value] = property.trim().split(':');  
            styleObj[key.trim()] = value.trim();  
            }  
        });  
        return styleObj; 
    }else {
        return str
    }
}