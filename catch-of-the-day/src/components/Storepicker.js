import React from 'react';

class Storepicker extends React.Component {

	render() {
		
		return(
			<form className="store-selector">
				{ /* This is how you comment */ }
				<h2>Please Enter A Store</h2>
				<input type="text" required placeholder="Store Name" />
				<button type="submit">Enter Store ➡</button>
			</form>
		)
	}
}

export default Storepicker;