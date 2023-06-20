function UserIdPage (props) {
  return <h1>{props.id}</h1>
};

export async function getServerSideProps(context) {

  const {params} = context;

  const userid = params.uid;

  return {
    props: {
      id: 'userid - ' + userid
    }
  }
}

export default UserIdPage;