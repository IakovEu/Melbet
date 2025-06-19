import st from './styles.module.scss';
import melbet from '../../images/MELBET.png';

export const Header = () => {
	return (
		<div className={st.header}>
			<h1 className={st.title}>
				<img src={melbet} alt="*" />
			</h1>
            <div className={st.line}></div>
		</div>
	);
};
