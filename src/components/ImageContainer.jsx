import { useEffect, useState } from 'react';

const Image = ({ image, needTopMargin = false }) => {
	return (
		<div className='w-full h-full px-4 mt-4'>
			<img
				src={image}
				alt='Your Image'
				className={`w-full h-full rounded-lg shadow-lg ${
					needTopMargin ? 'mt-[-38px]' : ''
				}`}
			/>
		</div>
	);
};

const ImageContainer = ({ image1440, image1080, image800, needTopMargin }) => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	let selectedImage;

	if (windowWidth >= 1440) {
		selectedImage = image1440;
	} else if (windowWidth >= 1080) {
		selectedImage = image1080;
	} else {
		selectedImage = image800;
	}

	return <Image image={selectedImage} needTopMargin={needTopMargin} />;
};

export default ImageContainer;
