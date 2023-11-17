export const setLocalItem = (key: string, value: any) => {
    if(value){
      let newvalue = value
      if(typeof value !=="string"){
        newvalue = JSON.stringify(value)
      }
      localStorage.setItem(key, newvalue);
    }
  };
  
  export const getFromLocalItem = (key: string) => {
    const response = localStorage.getItem(key);
    try {
      return JSON.parse(response as any);
    } catch (error) {
      return response;
    }
  };
  
  export const clearLocalItem = () => {
    localStorage.clear();
  };
  export const removeFromLocalItem = (key: string) => {
    localStorage.removeItem(key);
  };
  