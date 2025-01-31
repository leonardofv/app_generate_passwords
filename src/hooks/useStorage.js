import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {

    //buscar itens salvos
    const getItem = async (key) => {
        try {
            const passwords = await AsyncStorage.getItem(key);
            return JSON.parse(passwords) || [];
        } catch (error) {
            console.log("erro ao buscar", error);
            return [];
        }
    };

    //salvar um item no storage
    const saveItem = async (key, value) => {
        try {

            let passwords = await getItem(key);
            passwords.push(value);

            await AsyncStorage.setItem(key, JSON.stringify(passwords));

        }catch(error) {
            console.log("Erro ao salvar", error);
        }
    }

    //remover um item do storage
    const removeItem = async (key, value) => {
        try {
            let passwords = await getItem(key);
            passwords = passwords.filter(item => item !== value);
            await AsyncStorage.setItem(key, JSON.stringify(passwords));
            return passwords;
        } catch (error) {
            console.log("Erro ao remover", error);
            return [];
        }
    };

    return {
        getItem,
        saveItem,
        removeItem,
    }
};

export default useStorage;