import { collection, getDocs, getDoc, doc} from "firebase/firestore"
import {db} from './firebase'

export const getAllData = async() => {
    //Referencia a los documentos
    const query = collection(db, 'items');
    //Obtener datos
    const response = await getDocs(query);
    const dataItems = response.docs.map(product => {return {id: product.id, ...product.data()}});
    console.log(dataItems)
    return dataItems;

}
export const getOneProductData = async(id) => {
    //Referencia a los documentos
    const query = doc(db, 'items', id);
    //Obtener datos
    const response = await getDoc(query);
    const dataItem = {id: response.id, ...response.data()};
    return dataItem;

}