import { useEffect, useState } from "react";

export const useImage = (data: Resource | null) => {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    if (!data || data.type !== "image") return;
    fetch(`/images/${data.filename}`)
      .then((res) => res.blob())
      .then((blob) => {
        setImage(URL.createObjectURL(blob));
      });
  }, [data]);
  return image;
};
