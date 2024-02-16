import { useEffect, useState} from "react";
import generalStyles from "./assets/styles/generalStyles.module.css";
import { useCrud } from "./hooks/useCrud";
import { FormUser } from "./components/FormUser";
import { CardUser } from "./components/CardUser";

const urlUsers = "https://users-crud.academlo.tech";
function App() {
    const [isClose, setIsClose] = useState(true);
    const [users, getUsers, createUser, deleteUser, updateUser] = useCrud(urlUsers);
    
    const [edit, setEdit] = useState(); 
    useEffect(() => {
        getUsers("/users");
        console.log(users);
    }, []);


    const handleOpen = ()=>{
        setIsClose(false);
    }

    return (
        <>
            <header className={generalStyles.users__header}>
                <h1>Usuarios</h1> 
                 <div className={generalStyles.header__btn} onClick={handleOpen} >+ Crear nuevo usuario</div>
            </header>
            <FormUser createUser={createUser} updateUser={updateUser} edit={edit} users={users} setEdit={setEdit} isClose={isClose} setIsClose={setIsClose} />
            <main className={generalStyles.users__main}>
                {users ? (
                    <>
                        {users?.map((user) => (
                            <CardUser key={user.id} user={user} deleteUser={deleteUser} setEdit={setEdit} setIsClose={setIsClose} />
                        ))}
                    </>
                ) : (
                    <h2>LOADING...</h2>
                )}
            </main>
            <footer className={generalStyles.users__footer}>
                <p>&copy; DESARROLLADO POR MOISES ORTIZ GRACIA</p>
            </footer>
        </>
    )
}

export default App;
