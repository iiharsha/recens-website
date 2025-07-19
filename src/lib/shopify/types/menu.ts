export type Menu = {
  title: string;
  path?: string;
  items?: Menu[];
};

export type ShopifyMenuOperation = {
  data: {
    menu?: {
      items: {
        title: string;
        url: string;
        items: {
          title: string;
          url: string;
        }[];
      }[];
    };
  };
  variables: {
    handle: string;
  };
};
