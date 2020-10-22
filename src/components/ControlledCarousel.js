import React from 'react';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import './ControlledCarousel.css'

export default function ControlledCarousel(){

  function onChange(a, b, c) {
    console.log(a, b, c);
  }
  
  const contentStyle = {
    height: '800px',
    color: '#fff',
    lineHeight: '100px',
    textAlign: 'center',
    background: '#364d79',
  };
  
  return (
    <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>News Title1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>News Title2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>News Title3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>News Title4</h3>
      </div>
      {/* <div>
        <h3 className="cc">1</h3>
      </div>
      <div>
        <h3 className="cc">2</h3>
      </div>
      <div>
        <h3 className="cc">3</h3>
      </div>
      <div>
        <h3 className="cc">4</h3>
      </div> */}
    </Carousel>
  );
}

// export default function ControlledCarousel() {
//     const [index, setIndex] = useState(0);
  
//     const handleSelect = (selectedIndex, e) => {
//       setIndex(selectedIndex);
//     };
  
//     return (
//     <div className="controlled-carousel">
//       <Carousel activeIndex={index} onSelect={handleSelect}>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="holder.js/800x400?text=First slide&bg=373940"
//             alt="First slide"
//           />
//           <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="holder.js/800x400?text=Second slide&bg=282c34"
//             alt="Second slide"
//           />
  
//           <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="holder.js/800x400?text=Third slide&bg=20232a"
//             alt="Third slide"
//           />
  
//           <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>
//               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//       </div>
//     );

// }


