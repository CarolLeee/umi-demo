

export const dva = {
  config: {
    onError(err: { preventDefault: () => void; message: any; }) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};

