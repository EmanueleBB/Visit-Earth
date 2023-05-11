import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
	return (
		<div>
			<div className={styles.imagesContainer}>
				<div className={styles.divPrimoPiano}>
					<Image 
						
						alt='sfondo'
						src='/Images/primo-piano.png'
						fill={true}
					/>
				</div>
				<div className={styles.divSecondoPiano}>
					<Image
						
						alt='sfondo'
						src='/Images/secondo-piano.png'
						fill
						
					/>
				</div>
				<div className={styles.divTerzoPiano}>
					<Image
						
						alt='sfondo'
						src='/Images/terzo-piano.png'
						fill
						
					/>
				</div>
				<div className={styles.divQuartoPiano}>
					<Image
						
						alt='sfondo'
						src='/Images/quarto-piano.png'
						fill
						
					/>
				</div>
				<div className={styles.divCielo}>
					<Image
						className={styles.cielo}
						alt='sfondo'
						src='/Images/cielo.png'
						fill
						
					/>
				</div>
			<h1
				className={styles.homepageH1}
			>
				Visit Earth dude
			</h1>
			</div>
		</div>
	)
}
