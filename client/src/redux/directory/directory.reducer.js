const INITIAL_STATE = {
  sections: [
    {
      title: "ever greens",
      imageUrl:
        "https://images.pexels.com/photos/3571551/pexels-photo-3571551.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      id: 1,
      linkUrl: "shop/evergreens",
    },
    {
      title: "plants with flowers",
      imageUrl:
        "https://images.pexels.com/photos/5764075/pexels-photo-5764075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      id: 2,
      linkUrl: "shop/flower",
    },
    {
      title: "exotics",
      imageUrl:
        "https://images.unsplash.com/photo-1561627213-f689b52ccebf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1782&q=80",
      id: 3,
      linkUrl: "shop/exotics",
    },
    {
      title: "indoor plants",
      imageUrl:
        "https://images.pexels.com/photos/3076899/pexels-photo-3076899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      size: "large",
      id: 4,
      linkUrl: "shop/indoor",
    },
    {
      title: "outdoor plants",
      imageUrl:
        "https://images.pexels.com/photos/298246/pexels-photo-298246.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      size: "large",
      id: 5,
      linkUrl: "shop/outdoor",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
