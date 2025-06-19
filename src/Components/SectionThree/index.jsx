/* eslint-disable jsx-a11y/anchor-is-valid */
import st from './styles.module.scss';

export const SectionThree = () => {
	return (
		<div className={st.gridContainer}>
			<div className={st.facebook}>
				<div className={st.linkBlock}>
					<a className={st.link} href="#">
						FACEBOOK
					</a>
                    <div className={st.underline}></div>
				</div>
			</div>
			<div className={st.tiktok}>
				<div className={st.linkBlock}>
					<a className={st.link} href="#">
						TIKTOK
					</a>
                    <div className={st.underline}></div>
				</div>
			</div>
			<div className={st.telegram}>
				<div className={st.linkBlock}>
					<a className={st.link} href="#">
						TELEGRAM
					</a>
                    <div className={st.underline}></div>
				</div>
			</div>
			<div className={st.youtube}>
				<div className={st.linkBlock}>
					<a className={st.link} href="#">
						YOUTUBE
					</a>
                    <div className={st.underline}></div>
				</div>
			</div>
			<div className={st.twitter}>
				<div className={st.linkBlock}>
					<a className={st.link} href="#">
						X(TWITTER)
					</a>
                    <div className={st.underline}></div>
				</div>
			</div>
		</div>
	);
};
