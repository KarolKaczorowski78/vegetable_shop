import styled from 'styled-components';
import ImgProto from '../../atoms/img/img';

const Img = styled(ImgProto)`
  object-fit: cover;
  position: absolute;
  object-position: left;
  left: 0;
  top: 0;
  width: 100%;
  z-index: -2;
  height: 100%;
  @media (max-width: 650px) {
    display: none;
  }
`;

export default Img;