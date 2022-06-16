import { useEffect, useState } from "react";

export const useResource = (path: string | undefined) => {
  const [data, setData] = useState<Resource | null>(null);

  useEffect(() => {
    if (!path) return;
    fetch(`/info/${path}.json`)
      .then((res) => res.json())
      .then((res: ResourceResponse) => {
        setData({
          ...res,
          createdAt: new Date(res.createdAt),
        });
      })
      .catch((err) => {
        console.error(err);
        setData({
          public: false,
          type: "image",
          name: "",
          filename: "",
          createdAt: new Date(),
        });
      });
  }, [path]);

  return data;
};
