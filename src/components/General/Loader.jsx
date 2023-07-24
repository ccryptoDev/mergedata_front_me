export default function Loader({ size }) {
	return (
		<div className={`${size === 'large' ? 'lds-ring_big' : 'lds-ring'}`}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
}
