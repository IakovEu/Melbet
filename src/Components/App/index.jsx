import st from './styles.module.scss';
import { Header } from '../Header';
import { SectionOne } from '../SectionOne';
import { SectionTwo } from '../SectionTwo';
import { Button } from '../Button';
import { SectionThree } from '../SectionThree';
import { Footer } from '../Footer';

function App() {
	return (
		<div className={st.layout}>
			<div className={st.container}>
				<Header />
				<SectionOne />
				<SectionTwo />
				<Button />
			</div>
			<div className={st.background}>
				<div className={st.container}>
					<SectionThree />
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default App;
