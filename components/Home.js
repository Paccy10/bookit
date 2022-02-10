import React from "react";
import { useSelector } from "react-redux";
import Pagination from "react-js-pagination";
import { useRouter } from "next/router";
import Link from "next/link";

import RoomItem from "./room/RoomItem";

const Home = () => {
  const { rooms, limit, roomsCount, filteredRoomsCount } = useSelector(
    (state) => state.allRooms
  );
  const router = useRouter();

  let { page = 1, location } = router.query;
  page = Number(page);

  let count = roomsCount;
  if (location) {
    count = filteredRoomsCount;
  }

  const onPageChange = (pageNumber) => {
    router.push(`/?page=${pageNumber}`);
  };

  return (
    <>
      <section id="rooms" className="container mt-5">
        <h2 className="mb-3 ml-2 stays-heading">
          {location ? `Rooms in ${location}` : "All Rooms"}
        </h2>

        <Link href="/search" passHref>
          <a className="ml-2 back-to-search">
            <i className="fa fa-arrow-left"></i> Back to Search
          </a>
        </Link>
        <div className="row">
          {rooms && rooms.length === 0 ? (
            <div className="alert alert-danger mt-5 w-100">
              <b>No Rooms.</b>
            </div>
          ) : (
            rooms.map((room) => <RoomItem key={room._id} room={room} />)
          )}
        </div>
      </section>
      {limit < count && (
        <div className="d-flex justify-content-center mt-5">
          <Pagination
            activePage={page}
            itemsCountPerPage={limit}
            totalItemsCount={roomsCount}
            onChange={onPageChange}
            itemClass="page-item"
            linkClass="page-link"
          />
        </div>
      )}
    </>
  );
};

export default Home;
