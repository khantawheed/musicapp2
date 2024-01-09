import React from 'react';
import { Link } from 'react-router-dom';

const DetailsHeader = ({ artistId, artistData, songData }) => {
  const artistName = artistId ? artistData?.attributes?.name : songData?.title;
  const subtitle = artistId ? null : songData?.subtitle;
  const genre = artistId ? artistData?.attributes?.genreNames?.[0] : songData?.genres?.primary;
  const imageSrc = artistId
    ? artistData?.attributes?.artwork?.url?.replace('{w}', '500')?.replace('{h}', '500')
    : songData?.images?.coverart;

  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />

      <div className="absolute inset-0 flex items-center">
        <img
          alt="profile"
          src={imageSrc}
          className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
        />

        <div className="ml-5">
          <p className="font-bold sm:text-3xl text-xl text-white">{artistName}</p>
          {!artistId && subtitle && (
            <Link to={`/artists/${songData?.artists[0]?.adamid}`}>
              <p className="text-base text-gray-400 mt-2">{subtitle}</p>
            </Link>
          )}

          <p className="text-base text-gray-400 mt-2">{genre}</p>
        </div>
      </div>

      <div className="w-full sm:h-44 h-24" />
    </div>
  );
};

export default DetailsHeader;
