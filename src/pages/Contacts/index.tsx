import React from "react";
import routeMain from "./routes";

import "./style.scss";

import MotoImg from "assets/img/bmv-1200.jpg";

const Contacts = () => {
	return (
		<section className="main__page">
			<div className="container">
				<div className="row contact__wrapp">
					<div className="col-md-7">
						<img
							src={MotoImg}
							className="img-contact"
							alt="Simple my moto"
							title="Просто мопед"
						/>
					</div>
					<div className="col-md-1"></div>
					<div className="col-md-4">
						<div className="contact-tel-wrapp">MOVIESinfo</div>
						<div className="contact-name-wrapp">
							<div className="contact-name">
								Павел <br />
								Габов
							</div>
						</div>
						<div>
							<a
								className="contact-link"
								href="mailto:paul@gabow.ru?subject=Вперед через тернии к звездам"
								title="А прикольный же адрес почты?)"
							>
								paul@gabow.ru
							</a>
						</div>
						<div className="contact-title">
							Будущий JavaScript разработчик,
							<br />
							Возраст мне не помеха...
							<br />И это, material UI оказался по факту тот же Bootstrap-react,
							но с другим названием просто. Потому легко осваивается...
						</div>
						<div className="contact-subtitle">
							ES5, ES6, <span>React</span>, <span>Redux</span>, <span>TS</span>, <span>Bootstrap</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export { routeMain };
export default Contacts;
