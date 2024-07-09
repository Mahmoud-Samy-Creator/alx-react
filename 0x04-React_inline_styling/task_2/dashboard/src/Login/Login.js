import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
	formInputs: {
		display: 'flex',
		gap: '2em',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	inputStyling: {
		height: 'var(--gen-font-size)',
		fontSize: 'var(--gen-font-size)',
		marginLeft: '10px',
	}
})

export default function Login() {
    return(
        <section className={css(styles.formInputs)}>
					<section className='input'>
						<label htmlFor='email'>Email:</label>
						<input className={css(styles.inputStyling)} type='email' name='email' id='email' autoComplete='true'/>
					</section>
					<section className='input'>
						<label htmlFor='password'>Password: </label>
						<input className={css(styles.inputStyling)} type='password' name='password' id='password' />
					</section>
					<button>OK</button>
        </section>
    );
}
