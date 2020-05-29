import React from 'react';

//state>>props>> children (in this case Cardlist will be children of Scroll
//every props have children so I can say props.children.



const Scroll=(props) => { //Scroll is not a self closing component so how can you tell it, hey render whatever is inside of you?..
return (
//For style properties in React you should use CamelCase instead of all lowercase.
		<div style={ { overflowY: 'scroll', border:'5px solid #1f4037', height: '620px' }}>
		{props.children}
		</div>
	);
};

export default Scroll;