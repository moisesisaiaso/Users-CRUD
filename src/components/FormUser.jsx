import formStyles from "../assets/styles/formStyles.module.css";
import closeIcon from "../assets/img/close.png";
import { useEffect} from "react";
import { useForm } from "react-hook-form";

export const FormUser = ({ createUser, updateUser, edit, setEdit, users}) => {
    const { handleSubmit, register, reset } = useForm();

    useEffect( ()=> {
        if(edit){
            const arrayUser =  users.filter((user)=> user.id === edit);
            const getUser = arrayUser[0];
            const {first_name, last_name, email, password,birthday} = getUser;
            reset({
                first_name,
                last_name,
                email,
                password,
                birthday
            });
    
            console.log(getUser, "userEdit");
        }
    },[edit])

    const submit = (data) => {
        
        if(edit){
            updateUser("/users/", edit, data);
            setEdit(undefined);
        }else{
            
            createUser("/users/", data);
            console.log(data);
    
        }
        
        reset({
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            birthday: "",
        });
    };

    return (
        <section className={formStyles.form__group}>
            <form onSubmit={handleSubmit(submit)} className={formStyles.form}>
                <img src={closeIcon} alt="closeIcon" className={formStyles.form__closeIcon}  />
                <h2 className={formStyles.form__title}>Nuevo Usuario</h2>
                {/*  <fieldset>
                    <legend htmlFor="image_url">Foto</legend>
                    <input type="file" id="image_url" {...register("image_url")} required />
                </fieldset> */}
                <section className={formStyles.form__group}>
                    <fieldset>
                        <legend>First Name</legend>
                        <input type="text" id="first_name" {...register("first_name")} required />
                    </fieldset>
                    <fieldset>
                        <legend>Last Name</legend>
                        <input type="text" id="last_name" {...register("last_name")} required />
                    </fieldset>
                    <fieldset>
                        <legend>Email</legend>
                        <input type="email" id="email" {...register("email")} required />
                    </fieldset>
                    <fieldset>
                        <legend>Password</legend>
                        <input type="password" id="password" {...register("password")} required />
                    </fieldset>
                    <fieldset className={formStyles.group__birthday}>
                        <legend>Birthday</legend>
                        <input type="date" id="birthday" {...register("birthday")} required />
                    </fieldset>
                </section>
                <input type="submit" value={edit?"Actualizar Usuario" : "Agregar nuevo usuario"} />
            </form>
        </section>
    );
};
