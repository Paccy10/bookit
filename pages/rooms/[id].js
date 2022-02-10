import Layout from "../../components/layout/Layout";
import RoomDetails from "../../components/room/RoomDetails";
import { wrapper } from "../../redux/store";
import { getOneRoom } from "../../redux/actions/room";

const RoomDetailsPage = () => {
  return (
    <Layout>
      <RoomDetails />
    </Layout>
  );
};

export default RoomDetailsPage;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, params }) =>
      await store.dispatch(getOneRoom(req, params.id))
);
