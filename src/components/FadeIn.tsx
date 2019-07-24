import React, { useEffect, useRef } from 'react';
import { RouteComponentProps } from 'react-router';

interface Iprops {
	children: JSX.Element[] | JSX.Element,
	width: string;
	height: string;
	delay: number;
	speed: number;
}

const FadeIn = (props: Iprops) => {
	let selector = useRef<HTMLDivElement>(null);
	let opacity = 0;


	useEffect(() => {
		setTimeout(
			fade, props.delay * 1000);
	});

	const fade = () => {
		
		if(selector.current){
			selector.current.style.opacity = `${opacity}`
			opacity += (props.speed/100);
		}
		if(opacity < 1) {
			window.requestAnimationFrame(fade);
		}
	}

	return (
		<div ref={selector} className='fade-in' style={{width: `${props.width}`, height: `${props.height}`}}>
			{props.children}
		</div>
	);
}

export default FadeIn;