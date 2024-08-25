import React, {useEffect, useState } from 'react';

function Greeting(){
	const [message, setMessage] = useState('');
	
	useEffect(()=>{
		fetch('http://localhost:4000/api/greeting')
		.then(response => response.json())
		.then(data => setMessage(data.message))
		.catch(error => console.error('Error fetching data:', error));
}, []);

return (

	<div>
		<h1>{message}</h1>
	</div>
);
}

export default Greeting;
