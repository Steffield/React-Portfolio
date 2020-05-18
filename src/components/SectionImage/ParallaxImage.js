import { Parallax } from 'react-scroll-parallax';
 
const ParallaxImage = (props) => (
    <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
        <Image src={props.image} />
    </Parallax>
);

export default ParallaxImage;