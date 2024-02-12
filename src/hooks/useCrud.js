import axios from "axios";
import { useState } from "react";

export const useCrud = (urlBase) => {
    const [apiData, setApiData] = useState();

    /* Read */
    const getApi = (path) => {
        axios
            .get(`${urlBase}${path}`)
            .then(({ data }) => {
                setApiData(data);
                console.log("datos recibidos");
            })
            .catch((error) => console.log(error));
    };

    /* Create */
    const postApi = (path, data) => {
        axios
            .post(`${urlBase}${path}`, data)
            .then(({ data }) => {
                setApiData([data,...apiData]);
                console.log("User enviado");
            })
            .catch((error) => console.log(error));
    };


    /* DELETE */
    const deleteApi = ( path, id)=>{
           axios
               .delete(`${urlBase}${path}${id}/`)
               .then(({data})=> {
                       const newData =  apiData.filter((user)=> user.id !== id );
                       setApiData(newData);
                       console.log("Se ha eliminado un usuario");
               })
               .catch((error) => console.log(error));
    }

    /* UPDATE */
    const updateApi = (path,id,data)=>{
          axios
             .patch(`${urlBase}${path}${id}/`, data)
             .then(({data})=>{
                       const newData = apiData.map((user)=>{
                              if(user.id === id){
                                return data;
                              }
                              return user;
                       });
                      setApiData(newData);
                      console.log('Usuario actualizado');
             } )
             .catch((error)=> console.log(error));
    }

    return [apiData, getApi, postApi, deleteApi, updateApi];
};
