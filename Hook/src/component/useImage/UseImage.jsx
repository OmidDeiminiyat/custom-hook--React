import React from 'react';
import LazyLoad from 'react-lazy-load';
import style from './image.module.scss';

const modules = import.meta.glob('./../../../public/images/*.{jpg,png,jpeg}');

export function ImageGallery() {
  const imagePaths = Object.keys(modules);

  return (
    <>
    <div className={style.images}>
      {imagePaths.map((imagePath, index) => (
        <LazyLoad key={index} height={200} width={200}>
          <img src={[imagePath]} alt={`Image ${index + 1}`} />
        </LazyLoad>
      ))}
    </div>
    </>
  );
}