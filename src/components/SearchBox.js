import React from 'react';


const SearchBox = ({searchChange}) => { //searchChange becomes a functions since I grabbed it this the this object in the App object literal.
	return (
		<div className='pa2'>
			<input 

			className='pa3 ba b--green bg-lightest-lue'
			type='search' 
			placeholder='Search a Robot Here'
			onChange ={searchChange}

			/>
		</div>
	);

}

export default SearchBox;