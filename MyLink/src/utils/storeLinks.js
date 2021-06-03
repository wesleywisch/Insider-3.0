import AsyncStorage from '@react-native-async-storage/async-storage';


// Busacar os links salvos
export async function getLinkSave(key){
    const myLinks = await AsyncStorage.getItem(key);

    let linksSave = JSON.parse(myLinks) || [];

    return linksSave;
}

// Salvar o link no storage.
export async function saveLink(key, newLink){
    let linksStorage = await getLinkSave(key);

    // Se houver algum link ja salvo com esse mesmo ID / ou duplicado precisamos ignorar.
    const hasLink = linksStorage.some( link => link.id === newLink.id );
    
    if(hasLink){
        console.log("ESE LINK JÁ EXISTE!");
        return;  // Parar a execução.
    }

    linksStorage.push(newLink);
    await AsyncStorage.setItem(key, JSON.stringify(linksStorage));
    console.log("Link salvo com sucesso!")
    
}

// deletar um link
export async function deleteLink(links, id){

}