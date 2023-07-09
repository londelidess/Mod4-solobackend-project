import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { currentUserSpots } from "../../store/spots";
import { Link, NavLink } from "react-router-dom";
import UserSpotIndexItem from "./UserSpotIndexItem";
import "./Spots.css";

const ManageSpots = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const spotsObj =useSelector((state) => (state.spots.allSpots))
  const userSpots = Object.values(spotsObj)
  // console.log(userSpots);

  useEffect(() => {
    dispatch(currentUserSpots());
  }, [dispatch]);

  return (
    <section>
    <h2>Manage Spots</h2>
    {sessionUser && (
                <NavLink to="/spots/new" style={{ cursor: "pointer" }}>
                    Create a New Spot
                  </NavLink>
                )}
    {userSpots.length === 0 && <Link to="/spots/new">Create a New Spot</Link>}
    <ul className="spot-grid">
      {userSpots.map((spot) => (
        <UserSpotIndexItem spot={spot} key={spot.id} sessionUser={sessionUser} />
      ))}
    </ul>
  </section>
  );
};

export default ManageSpots;