import { ChatEngine } from 'react-chat-engine';
import { ChatFeed } from './components/ChatFeed';
import './App.css';
import { LoginForm } from './components/LoginForm';

export const App = () => {
	const projectID = '4acc5bd7-d72d-4e92-8718-fa2a6f83b2da';

	if (!localStorage.getItem('username')) return <LoginForm projectID={projectID} />;
	return (
		<ChatEngine
			height='100vh'
			projectID={projectID}
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>
	);
};
