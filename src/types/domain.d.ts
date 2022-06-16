type Resource = {
  type: "image";
  name: string;
  filename: string;
  createdAt: Date;
  public: boolean;
};
type ResourceResponse = Omit<Resource, "createdAt"> & {
  createdAt: number;
};
