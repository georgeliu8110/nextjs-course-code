function UserProfilePage(props) {
  return <h1>{props.username}</h1>
}

export async function getServerSideProps () {
  return {
    props: {
      username: 'max'
    }
  }
}

export default UserProfilePage;