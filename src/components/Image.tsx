import React from "react";
import { useImage } from "../hooks/useImage";

type ImageProps = {
  data: Resource;
};

export const Image = ({ data }: ImageProps) => {
  const image = useImage(data);
  if (!image) return null;
  return (
    <>
      <img src={image} alt={data.name} />
    </>
  );
};
