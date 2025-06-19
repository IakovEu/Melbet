import st from './styles.module.scss';

export const Button = ()=>{
    return (
        <div className={st.btnContainer}>
            <button className={st.btn}>Tham gia ngay</button>
        </div>
    )
}