import cardUserStyles from "../assets/styles/cardUserStyles.module.css";
import userImage from "../assets/img/user.png";
import birthdayIcon from "../assets/img/birthday.png";
import deleteIcon from "../assets/img/delete-us.png";
import editIcon from "../assets/img/edit.png";

export const CardUser = ({ user, deleteUser, setEdit }) => {
    const { id, first_name, last_name, email, birthday } = user;

    const handleDelete = ()=>{
        deleteUser('/users/', id);
    }

    const handleGetUser = ()=>{
         setEdit(id);
    }

    return (
        <>
            <article className={cardUserStyles.main__card}>
                <section className={cardUserStyles.card__nameGroup}>
                    <img src={userImage} alt="userImage" />
                    <div className={cardUserStyles.card__name}>
                        <h2>{first_name} </h2>
                        <h2>{last_name}</h2>
                    </div>
                </section>

                <section className={cardUserStyles.card__infoGroup}>
                    <div className={cardUserStyles.infoGroup__info}>
                        <span>CORREO</span>
                        <h3>{email}</h3>
                    </div>

                    <div className={cardUserStyles.infoGroup__info}>
                        <span>CUMPLEAÑOS</span>
                        <div className={cardUserStyles.info__birthday}>
                            <img src={birthdayIcon} alt="birthdayIcon" />
                            <h3>{birthday}</h3>
                        </div>
                    </div>
                </section>
                <hr />
                <section className={cardUserStyles.card__btn}>
                    <div className={cardUserStyles.btn__edit} onClick={handleGetUser} >
                        <img src={editIcon} alt="editIcon" />
                
                    </div>

                    <div className={cardUserStyles.btn__delete} onClick={handleDelete}>
                        <img src={deleteIcon} alt="deleteIcon"/>
                    </div>

                </section>
            </article>
        </>
    );
};
