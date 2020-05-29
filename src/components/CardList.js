import React from 'react';
import Card from './Card';



const CardList = ({robots}) => {


	return(
		<div>
			{

				robots.map((user, index) => { //Prior to this code I hade the map function as a function expression store in robotsArray and in the divs I had only wrap y curly brakets the name of the array.
				return (//Notice that arguments go in parentheses and I use praentheses after the return KeyWord so I can give it someSpace and make it look prettier.
					<Card 
						key={index} 
						id={robots[index].id} 
						name={robots[index].name} 
						email={robots[index].email}
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;