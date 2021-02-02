import styled, { css } from 'styled-components';
import { DropzoneRootProps } from 'react-dropzone';
import urlDropImage from '../../assets/theme/drop_image.svg';
import urlSpinner from '../../assets/spinner/dual-ring.svg';

interface ImagePropsUpload extends DropzoneRootProps {
  hasImage: boolean;
}

const getColor = (props: DropzoneRootProps) => {
  if (props.isDragAccept) return '#00e676';

  if (props.isDragActive) return '#2196f3';

  if (props.isDragReject) return '#ff1744';

  return '#eeeeee';
};

export const DropzoneContainer = styled.div<ImagePropsUpload>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  height: 250px;
  width: 100%;
  border-width: 2px;
  border-radius: 10px;
  border-style: dashed;
  background-color: #fff;
  color: #c6c6c6;
  outline: none;
  transition: border 0.24s ease-in-out;
  border-color: ${props => getColor(props)};
  cursor: pointer;
  margin-bottom: 21px;

  ${props =>
    props.hasImage &&
    css`
      padding: 0;
      border-color: var(--color-button-primary);
    `}

  &:hover {
    border-color: var(--color-button-primary);
  }

  span {
    background: url(${urlDropImage});
    width: 48px;
    height: 48px;
    background-repeat: no-repeat;
    background-size: contain;
    display: block;
    margin: 1rem;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
    background: url(${urlSpinner});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;
