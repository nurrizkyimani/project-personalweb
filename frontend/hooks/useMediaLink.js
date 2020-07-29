import { useState, useEffect } from 'react';

const socialMediaLink = () => {
	const [ mediaLink, setMediaLink ] = useState([]);

	useEffect(() => {
		setMediaLink([
			{
				svg: (
					<svg
						width="20px"
						height="20px"
						viewBox="0 0 20 20"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g id="instagram-icon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g>
								<rect
									id="Rectangle-Copy"
									fill-opacity="0"
									fill="#D8D8D8"
									x="0"
									y="0"
									width="20"
									height="20"
								/>
								<g class="social-icon-color" id="instagram-shape" fill="#000000" fill-rule="nonzero">
									<path
										class="social-icon-color"
										d="M9.98019802,1.8019802 C12.6455446,1.8019802 12.9584158,1.81386139 14.0118812,1.86138614 C14.9861386,1.9049505 15.5128713,2.06732673 15.8653465,2.20594059 C16.3326733,2.38811881 16.6653465,2.6019802 17.0138614,2.95049505 C17.3623762,3.2990099 17.580198,3.63168317 17.7584158,4.0990099 C17.8930693,4.45148515 18.0594059,4.97821782 18.1029703,5.95247525 C18.150495,7.00594059 18.1623762,7.31881188 18.1623762,9.98415842 C18.1623762,12.649505 18.150495,12.9623762 18.1029703,14.0158416 C18.0594059,14.990099 17.8970297,15.5168317 17.7584158,15.8693069 C17.5762376,16.3366337 17.3623762,16.6693069 17.0138614,17.0178218 C16.6653465,17.3663366 16.3326733,17.5841584 15.8653465,17.7623762 C15.5128713,17.8970297 14.9861386,18.0633663 14.0118812,18.1069307 C12.9584158,18.1544554 12.6455446,18.1663366 9.98019802,18.1663366 C7.31485149,18.1663366 7.0019802,18.1544554 5.94851485,18.1069307 C4.97425743,18.0633663 4.44752475,17.9009901 4.0950495,17.7623762 C3.62772277,17.580198 3.2950495,17.3663366 2.94653465,17.0178218 C2.5980198,16.6693069 2.38019802,16.3366337 2.2019802,15.8693069 C2.06732673,15.5168317 1.9009901,14.990099 1.85742574,14.0158416 C1.80990099,12.9623762 1.7980198,12.649505 1.7980198,9.98415842 C1.7980198,7.31881188 1.80990099,7.00594059 1.85742574,5.95247525 C1.9009901,4.97821782 2.06336634,4.45148515 2.2019802,4.0990099 C2.38415842,3.63168317 2.5980198,3.2990099 2.94653465,2.95049505 C3.2950495,2.6019802 3.62772277,2.38415842 4.0950495,2.20594059 C4.44752475,2.07128713 4.97425743,1.9049505 5.94851485,1.86138614 C7.0019802,1.80990099 7.31485149,1.8019802 9.98019802,1.8019802 Z M9.98019802,0.00396039604 C7.27128713,0.00396039604 6.93069307,0.0158415842 5.86534653,0.0633663366 C4.8039604,0.110891089 4.07920792,0.281188119 3.44554455,0.526732673 C2.78811881,0.78019802 2.23366337,1.12475248 1.67920792,1.67920792 C1.12475248,2.23366337 0.784158416,2.79207921 0.526732673,3.44554455 C0.281188119,4.07920792 0.110891089,4.8039604 0.0633663366,5.86930693 C0.0158415842,6.93069307 0.00396039604,7.27128713 0.00396039604,9.98019802 C0.00396039604,12.6891089 0.0158415842,13.029703 0.0633663366,14.0950495 C0.110891089,15.1564356 0.281188119,15.8811881 0.526732673,16.5188119 C0.78019802,17.1762376 1.12475248,17.7306931 1.67920792,18.2851485 C2.23366337,18.839604 2.79207921,19.180198 3.44554455,19.4376238 C4.07920792,19.6831683 4.8039604,19.8534653 5.86930693,19.9009901 C6.93465347,19.9485149 7.27128713,19.960396 9.98415842,19.960396 C12.6970297,19.960396 13.0336634,19.9485149 14.0990099,19.9009901 C15.160396,19.8534653 15.8851485,19.6831683 16.5227723,19.4376238 C17.180198,19.1841584 17.7346535,18.839604 18.2891089,18.2851485 C18.8435644,17.7306931 19.1841584,17.1722772 19.4415842,16.5188119 C19.6871287,15.8851485 19.8574257,15.160396 19.9049505,14.0950495 C19.9524752,13.029703 19.9643564,12.6930693 19.9643564,9.98019802 C19.9643564,7.26732673 19.9524752,6.93069307 19.9049505,5.86534653 C19.8574257,4.8039604 19.6871287,4.07920792 19.4415842,3.44158416 C19.1881188,2.78415842 18.8435644,2.22970297 18.2891089,1.67524752 C17.7346535,1.12079208 17.1762376,0.78019802 16.5227723,0.522772277 C15.8891089,0.277227723 15.1643564,0.106930693 14.0990099,0.0594059406 C13.029703,0.0158415842 12.6891089,0.00396039604 9.98019802,0.00396039604 Z"
										id="Shape"
									/>
									<path
										d="M9.98019802,4.85544554 C7.15247525,4.85544554 4.85544554,7.14851485 4.85544554,9.98019802 C4.85544554,12.8118812 7.15247525,15.1049505 9.98019802,15.1049505 C12.8079208,15.1049505 15.1049505,12.8079208 15.1049505,9.98019802 C15.1049505,7.15247525 12.8079208,4.85544554 9.98019802,4.85544554 Z M9.98019802,13.3069307 C8.14257426,13.3069307 6.65346535,11.8178218 6.65346535,9.98019802 C6.65346535,8.14257426 8.14257426,6.65346535 9.98019802,6.65346535 C11.8178218,6.65346535 13.3069307,8.14257426 13.3069307,9.98019802 C13.3069307,11.8178218 11.8178218,13.3069307 9.98019802,13.3069307 Z"
										id="Shape"
									/>
									<circle id="Oval" cx="15.3069307" cy="4.65346535" r="1.1960396" />
								</g>
							</g>
						</g>
					</svg>
				),
				label: 'Instagram'
			},

			{
				svg: (
					<svg
						width="20px"
						height="20px"
						viewBox="0 0 20 20"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g id="twitter-icon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g>
								<rect
									id="Rectangle"
									fill-opacity="0"
									fill="#D8D8D8"
									x="0"
									y="0"
									width="20"
									height="20"
								/>
								<path
									class="social-icon-color"
									d="M20,3.01256654 C19.2510436,3.35941651 18.4566936,3.58712602 17.643321,3.68813544 C18.4892756,3.15643522 19.14001,2.31617804 19.4462379,1.3135014 C18.6408296,1.81340397 17.7596395,2.16560406 16.8407487,2.35488112 C16.065228,1.48861704 14.9807082,0.99794649 13.846095,1.00000646 C11.5810292,1.00000646 9.74264096,2.92101374 9.74264096,5.29070981 C9.74264096,5.62742659 9.77887793,5.955602 9.84982073,6.26896348 C6.43920738,6.08972819 3.41648272,4.38212168 1.39231623,1.78554549 C1.03887819,2.41854101 0.837278144,3.15643522 0.837278144,3.94304193 C0.837278144,5.43110856 1.56137956,6.74474442 2.6621413,7.51440185 C2.01041955,7.49350911 1.37299248,7.30943758 0.803337884,6.97763019 L0.803337884,7.03234833 C0.803337884,9.1108371 2.21785564,10.8452689 4.09401197,11.2403072 C3.48976827,11.4114337 2.85622211,11.4365345 2.24133311,11.3137096 C2.76370689,13.0187804 4.27953504,14.2591473 6.07428579,14.2951812 C4.67023082,15.4442622 2.90125426,16.1315755 0.978398173,16.1315755 C0.65143461,16.1311842 0.324762939,16.1111323 0,16.071519 C1.81567632,17.2886641 3.97292435,18 6.28992127,18 C13.8371633,18 17.9635844,11.4599805 17.9635844,5.78851147 C17.9635844,5.60300361 17.9635844,5.41749575 17.9508249,5.23332248 C18.7537562,4.62570163 19.4471529,3.87377748 19.9987241,3.01256654 L20,3.01256654 Z"
									id="twitter-shape"
									fill="#000000"
									fill-rule="nonzero"
								/>
							</g>
						</g>
					</svg>
				),
				label: 'Twitter'
			},

			{
				svg: (
					<svg
						width="20px"
						height="20px"
						viewBox="0 0 20 20"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g id="medium-icon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g>
								<rect
									id="Rectangle-Copy-2"
									fill-opacity="0"
									fill="#D8D8D8"
									x="0"
									y="0"
									width="20"
									height="20"
								/>
								<g
									class="social-icon-color"
									id="medium-shape"
									transform="translate(0.000000, 1.000000)"
									fill="#000000"
									fill-rule="nonzero"
								>
									<path
										d="M20,17 L12.3810526,17 C12.3810526,17 13.9421053,15.17675 13.9536842,15.0800625 C13.9642105,14.983375 13.9684211,3.92275 13.9684211,3.92275 L8.94736842,17 C8.94736842,17 3.28947368,4.10975 3.17473684,3.7771875 C3.17473684,3.7771875 3.16947368,13.1250625 3.19473684,13.228125 C3.22105263,13.33225 5.71473684,17 5.71473684,17 L0,17 C0,17 2.49473684,13.3333125 2.52,13.2291875 C2.54631579,13.1250625 2.55473684,3.1311875 2.54631579,3.0398125 C2.53894737,2.947375 2.50842105,2.8761875 2.41578947,2.75825 L0.634736842,0 L6.02842105,0 L10.5263158,10.625 L14.7557895,0 L20,0 C20,0 18.4515789,2.0028125 18.4305263,2.1154375 C18.4084211,2.2280625 18.4136842,14.9780625 18.4252632,15.0715625 C18.4357895,15.166125 20,17 20,17 Z"
										id="Shape"
									/>
								</g>
							</g>
						</g>
					</svg>
				),
				label: 'Medium'
			},

			{
				svg: (
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
						<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
					</svg>
				),
				label: 'Github'
			},

			{
				svg: (
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
						<path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
					</svg>
				),
				label: 'Linkedin'
			},
			{
				svg: (
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
						<path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
					</svg>
				),
				label: 'Email'
			}
		]);
  }, []);
  
  

	return mediaLink ;
};

export default socialMediaLink;
