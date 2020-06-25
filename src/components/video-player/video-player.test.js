import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";

const film = {
  poster: ``,
  src: ` `
};


it(`Should VideoPlayer render correctly`, () => {
  const tree = renderer
    .create(<VideoPlayer
      film={film}
      onSmallMovieCardClick={() => {}}
      onSmallMovieCardHover={() => {}}
      isPlaying={false}
    />,
    {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

  expect(tree).toMatchSnapshot();
});