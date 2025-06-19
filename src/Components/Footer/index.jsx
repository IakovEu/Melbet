import st from './styles.module.scss';
import icon1 from '../../images/icon1.svg';
import icon2 from '../../images/icon2.svg';
import icon3 from '../../images/icon3.svg';
import icon4 from '../../images/icon4.svg';

export const Footer = () => {
	return (
		<div className={st.footerContainer}>
			<div className={st.brick}>
				<img src={icon1} alt="*" />
				<div className={st.txt}>
					<div className={st.txtTitle}>ĐA DẠNG TRÒ CHƠI</div>
					<div>Hàng nghìn game hấp dẫn!</div>
				</div>
			</div>
			<div className={st.brick}>
				<img src={icon2} alt="*" />
				<div className={st.txt}>
					<div className={st.txtTitle}>CƯỢC NHANH - THẮNG LỚN</div>
					<div>Hoàn lại tiền sau đổi trả</div>
				</div>
			</div>
			<div className={st.brick}>
				<img src={icon3} alt="*" />
				<div className={st.txt}>
					<div className={st.txtTitle}>HỖ TRỢ 24/7 </div>
					<div>Giải đáp mọi thắc mắc</div>
				</div>
			</div>
			<div className={st.brick}>
				<img src={icon4} alt="*" />
				<div className={st.txt}>
					<div className={st.txtTitle}>GIAO DỊCH AN TOÀN </div>
					<div>Bảo mật tuyệt đốI</div>
				</div>
			</div>
		</div>
	);
};
