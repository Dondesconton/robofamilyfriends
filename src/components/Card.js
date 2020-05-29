import React from 'react';//React must be in scope when writing JSX meaning using virtual html tags in a JS file.

const Card =(props)=> {
	return (
	<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
		<img alt="Robot" src={`https://robohash.org/${props.id}200x200`}/>
		<div>
			<h2>{props.name}</h2> 
			<p>{props.email}</p>
		</div>
	</div>
	);
}
export default Card;  //I need to wrAP Props between brakets because that way my code editor understand my syntax

//Another Cool thing I can do:

// const Card =(props)=> {
// 	const{name email id} = props;
// 	return (
// 	<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
// 		<img alt="Robot" src={`https://robohash.org/${id}200x200`}/>
// 		<div>
// 			<h2>{name}</h2> 
// 			<p>{email}</p>
// 		</div>
// 	</div>
// 	);
// }
// export default Card;


// const Card =({name email id})=> {//Destructuring within the parameter...
// 	return (
// 	<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
// 		<img alt="Robot" src={`https://robohash.org/${id}200x200`}/>
// 		<div>
// 			<h2>{name}</h2> 
// 			<p>{email}</p>
// 		</div>
// 	</div>
// 	);
// }
// export default Card;