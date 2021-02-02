import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import * as S from './styled';

interface DropzoneProps {
  image?: string | null;
}

const Dropzone: React.FC<DropzoneProps> = ({ image }) => {
  const [pathimagePreview, setPathImagePreview] = useState(() => {
    if (image) return image;

    return '';
  });

  const onDrop = useCallback(acceptedFiles => {
    const arrayFiles = acceptedFiles.map((file: object) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      }),
    );

    const file = arrayFiles[0];
    setPathImagePreview(file.preview);
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: 'image/jpeg, image/jpg, image/png',
    maxFiles: 1,
  });

  return (
    <S.DropzoneContainer
      {...getRootProps({
        isDragActive,
        isDragAccept,
        isDragReject,
      })}
      hasImage={!!pathimagePreview}
    >
      <input {...getInputProps()} />
      {!pathimagePreview ? (
        <>
          <span />
          <p>Clique ou arraste imagens até aqui.</p>
        </>
      ) : (
        <img
          loading="lazy"
          src={pathimagePreview}
          alt="imagem prévia do banner"
        />
      )}
    </S.DropzoneContainer>
  );
};

export default Dropzone;
