import axios from 'axios';
import { useState } from 'react';

export const LoginForm = (props) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		const authObj = {
			'Project-ID': props.projectID,
			'User-Name': username,
			'User-Secret': password,
		};

		try {
			// Get username | password => chat-engine
			await axios.get('https://api.chatengine.io/chats', { headers: authObj });
			// Works out => Log in
			localStorage.setItem('username', username);
			localStorage.setItem('password', password);

			window.location.reload();
		} catch (error) {
			// Error => Try with new username
			setError('Oops, incorrect credentials');
		}
	};

	return (
		<div className='wrapper'>
			<div className='form'>
				<h1 className='title'>Chat React Application</h1>
				<form onSubmit={handleSubmit}>
					<input
						onChange={(e) => setUsername(e.target.value)}
						className='input'
						placeholder='Username'
						required
						type='text'
						value={username}
					/>
					<input
						onChange={(e) => setPassword(e.target.value)}
						className='input'
						placeholder='Password'
						required
						type='password'
						value={password}
					/>
					<div align='center'>
						<button type='submit' className='button'>
							<span>Start chatting</span>
						</button>
					</div>
					<h2 className='error'>{error} </h2>
				</form>
			</div>
		</div>
	);
};
